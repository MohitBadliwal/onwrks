"use client";

import React from "react";
import { useLoaderStore } from "../../store/useLoaderStore";

export default function Loader() {
  const { loading } = useLoaderStore();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white/70 z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
        <p className="mt-4 text-gray-700 font-semibold text-sm">Loading...</p>
      </div>
    </div>
  );
}
