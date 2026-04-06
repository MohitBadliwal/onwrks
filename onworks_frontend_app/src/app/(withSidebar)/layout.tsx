// app/(withSidebar)/layout.tsx
"use client";

import Header from "../../components/global/Header";
// import ProtectedRoute from "@/components/ProtectedRoutes";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";


export default function WithSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] =
      useState(false);
  return (
    <div className="flex">
        {/* <ProtectedRoute> */}
        <Header/>
        <Sidebar
          isSidebarExpanded={isSidebarExpanded}
          setIsSidebarExpanded={setIsSidebarExpanded}
        />
        <div
          className={`flex-1 bg-gray-50 p-6 transition-all duration-300 ease-in-out mt-12 ${
            isSidebarExpanded ? "ml-48" : "ml-12"
          } `}
        >
          {children}
        </div>
        {/* </ProtectedRoute> */}
      </div>
  );
}
