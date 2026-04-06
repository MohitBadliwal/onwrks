"use client";
import React, { useState } from "react";
import Image from "next/image";
import NotificationIcon from "../../icons/NotificationIcon";
import UserProfileDrawer from "../../components/UserProfileDrawer";
import { useAuthStore } from "../../store/useAuthStore";
import SearchIcon from "../../icons/SearchIcon";
import NotificationDrawer from "../../components/NotificationDrawer";
interface props {
  children?: React.ReactNode;
  
}
export default function Header({ children }: props) {
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] =
    useState(false);
  const { userType } = useAuthStore();

  return (
    <>
      <div className="fixed top-0 w-full border-b border-gray-200 shadow-sm bg-white z-50 h-12 flex items-center px-4 justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/logo1.png"
            alt="OnWorks Logo"
            width={38}
            height={38}
          />
          <span className="font-bold text-sm">OnWorks</span>
        </div>
          {children}
        <div className="flex gap-4">
            <div className="w-full max-w-md">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <SearchIcon className="h-4 w-4 " color="gray" />
                </span>
                <input
                  type="text"
                  placeholder="Search Application..."
                  className="w-full rounded-sm border border-gray-300 pl-10 pr-4 py-1 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          {<span
            onClick={() => {
              setIsNotificationDrawerOpen(!isNotificationDrawerOpen),
                setIsProfileDrawerOpen(false);
            }}
          >
            <NotificationIcon />
          </span>}
          <div
            className="w-9 h-7 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center"
            onClick={() => {
              setIsProfileDrawerOpen(!isProfileDrawerOpen),
                setIsNotificationDrawerOpen(false);
            }}
          >
            <Image
              src="/assets/ProfileImage.png"
              alt="Profile"
              width={28}
              height={28}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      {isProfileDrawerOpen && (
        <UserProfileDrawer onClose={() => setIsProfileDrawerOpen(false)} />
      )}
      {isNotificationDrawerOpen && <NotificationDrawer onClose={()=>setIsNotificationDrawerOpen(false)}/>}
    </>
  );
}
