/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Types for object field and creation payload
export interface ObjectField {
  id: number;
  objectName: string;
}

export interface NewObjectPayload {
  apiName: string;
  label: string;
  pluralLabel: string;
  description: string;
  userId: number;
}

interface ObjectFieldContextType {
  objectTableField: number;
  setObjectField: (field: number) => void;
  objectsList: any;
  setObjectsList: (field: any) => void;
}

const ObjectFieldContext = createContext<ObjectFieldContextType | undefined>(
  undefined
);

// choose a stable key for sessionStorage
const STORAGE_KEY = "app:objectTableField";

export const ObjectFieldProvider = ({ children }: { children: ReactNode }) => {
  // default is 0 (same as your existing code)
  const [objectTableField, setObjectFieldState] = useState<number>(0);
  const [objectsList, setObjectsList] = useState<NewObjectPayload | null>(
    null
  );

  // load from sessionStorage on client mount
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw !== null) {
        const parsed = JSON.parse(raw);
        // ensure parsed is a number (fallback to 0)
        const value = typeof parsed === "number" ? parsed : 0;
        setObjectFieldState(value);
      }
    } catch (err) {
      console.warn("Failed to read objectTableField from sessionStorage", err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // persist whenever it changes
  useEffect(() => {
    try {
      // we still persist 0 (your app treats 0 as default) — change if needed
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(objectTableField));
    } catch (err) {
      console.warn("Failed to save objectTableField to sessionStorage", err);
    }
  }, [objectTableField]);

  

  // keep the same setter name `setObjectField` your code expects
  const setObjectField = (field: number) => {
    setObjectFieldState(field);
    // no need to write to sessionStorage here — effect will persist it
  };

  return (
    <ObjectFieldContext.Provider
      value={{ objectTableField, setObjectField, objectsList, setObjectsList }}
    >
      {children}
    </ObjectFieldContext.Provider>
  );
};

export const useObjectField = (): ObjectFieldContextType => {
  const context = useContext(ObjectFieldContext);
  if (!context) {
    throw new Error(
      "useObjectField must be used within an ObjectFieldProvider"
    );
  }
  return context;
};
