"use client";

import Header from "../components/global/Header";

import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const isAuthenticated = false;
  return (
    <>
      {children}
    </>
  );
}
