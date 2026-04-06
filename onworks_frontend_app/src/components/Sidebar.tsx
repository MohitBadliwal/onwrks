"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardIcon from "../icons/DashboardIcon";
import LoansIcons from "../icons/LoansIcons";
import PaymentsIcon from "../icons/PaymentsIcon";
import DocumentIcon from "../icons/DocumentIcon";
import CalculatorIcon from "../icons/CalculatorIcon";
import OffersIcon from "../icons/OffersIcon";
import MenuCloseIcon from "../icons/MenuCloseIcon";
import { useAuthStore } from "../store/useAuthStore";
import BranchM_Icon from "../icons/BranchM_Icon";
import StaffM_Icon from "../icons/StaffM_Icon";
import ReportMenuIcon from "../icons/ReportMenuIcon";
import ComplianceIcon from "../icons/ComplianceIcon";
import AllApplicationIcon from "../icons/AllApplicationIcon";
import NewApplicationIcon from "../icons/NewApplicationIcon";

interface SidebarProps {
  isSidebarExpanded: boolean;
  setIsSidebarExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({
  isSidebarExpanded,
  setIsSidebarExpanded,
}: SidebarProps) {
  const pathname = usePathname();
  const { userType } = useAuthStore();
  const menuItemsForCustomer = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <DashboardIcon />,
    },
    { id: "myLoan", label: "My Loans", icon: <LoansIcons size={20}/> },
    { id: "payments", label: "Payments", icon: <PaymentsIcon size={20} /> },
    { id: "documents", label: "Documents", icon: <DocumentIcon size={20} /> },
    { id: "emiCalculator", label: "Calculator", icon: <CalculatorIcon size={20} /> },
    { id: "offers", label: "Offers", icon: <OffersIcon size={20} /> },
  ];

  const menuItemsForDealer = [
    {
      id: "dealerDashboard",
      label: "Dashboard",
      icon: <DashboardIcon  size={20}/>,
      isActive: true,
    },
    {
      id: "newApplication",
      label: "New Application",
      icon: <NewApplicationIcon  size={20}/>,
    },
    {
      id: "dealerAllApplication",
      label: "All Application",
      icon: <AllApplicationIcon size={20}/>,
    },
    {
      id: "staffManagement",
      label: "Staff Management",
      icon: <StaffM_Icon size={20}/>,
    },
    {
      id: "branchManagement",
      label: "Branch Management",
      icon: <BranchM_Icon size={20}/>,
    },
    {
      id: "emiCalculator",
      label: "Loan Calculator",
      icon: <CalculatorIcon size={20}/>,
    },
    {
      id: "reportsAndAnalytics",
      label: "Reports & Analytics",
      icon: <ReportMenuIcon size={20}/>,
    },
    {
      id: "complianceCenter",
      label: "Compliance Center",
      icon: <ComplianceIcon size={20}/>,
    },
  ];
  return (
    <div
      className={`h-[95vh] mt-12 bg-white shadow flex flex-col items-center  fixed transition-all duration-300 ease-in-out ${
        isSidebarExpanded ? "w-48" : "w-12"
      }`}
      onMouseEnter={() => setIsSidebarExpanded(true)}
    >
      <div className="w-full">
        {(userType === "customer"
          ? menuItemsForCustomer
          : menuItemsForDealer
        ).map((item) => {
          const route = `/${item.id}`;
          const isActive = pathname === route;
          return (
            <Link href={route} key={item?.id}>
              <div
                key={item?.id}
                className={`relative mb-2 ms-2 ${
                  isActive ? "bg-orange-100" : ""
                }`}
              >
                {isActive && (
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-orange-500 rounded-r"></div>
                )}

                <div
                  className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-gray-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <span
                    className={`ml-3 text-sm font-medium whitespace-nowrap inline-block overflow-hidden transition-all duration-300 ease-in-out transform ${
                      isSidebarExpanded
                        ? "max-w-[10rem] opacity-100 translate-x-0 delay-150"
                        : "max-w-0 opacity-0 -translate-x-2"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex-1" />
      <div className="mt-auto px-2 w-full mb-4">
        <button
          onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
          className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors w-full"
        >
          <span className="flex-shrink-0 w-5 h-5">
            <MenuCloseIcon size={20}/>
          </span>
          <span
            className={`ml-3 text-sm font-medium overflow-hidden transition-all duration-300 ease-in-out transform ${
              isSidebarExpanded
                ? "max-w-[6rem] opacity-100 translate-x-0 delay-150"
                : "max-w-0 opacity-0 -translate-x-2"
            }`}
          >
            Close
          </span>
        </button>
      </div>
    </div>
  );
}
