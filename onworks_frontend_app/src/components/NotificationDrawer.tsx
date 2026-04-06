import AllReadCheckMarkIcon from "../icons/AllReadCheckMarkIcon";
import CircularProgressShowIcon from "../icons/CircularProgressShowIcon";
import CloseIcon from "../icons/CloseIcon";
import DeleteIcon from "../icons/DeleteIcon";
import EmailIcon from "../icons/EmailIcon";
import NotificationIcon from "../icons/NotificationIcon";
import React, { useState } from "react";
interface INotificationDrawerProps {
  onClose: () => void;
}
const NotificationDrawer = ({ onClose }: INotificationDrawerProps) => {
  const [tab, setTab] = useState("all");
  return (
    <div className="fixed inset-0 z-50 mt-12 flex justify-end">
  <div className="relative h-full w-[90%] max-w-sm overflow-y-auto bg-white shadow-lg 
                  animate-slideInRight">
        <div className="bg-[#EDEDED] p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <NotificationIcon /> Notifications{" "}
              <span className="ml-1 text-sm bg-white px-2 rounded-full text-gray-400">
                6
              </span>
            </h2>
            <button onClick={onClose}>
              <CloseIcon size={15} />
            </button>
          </div>
          <div className="flex gap-2 mt-3">
            <button className="flex gap-1  px-3 py-1 text-sm bg-white rounded hover:bg-gray-200">
              <AllReadCheckMarkIcon /> Mark all read
            </button>
            <button className="flex gap-1 px-3 py-1 text-sm bg-white rounded hover:bg-gray-200">
              <DeleteIcon size={15} /> Clear all
            </button>{" "}
          </div>
        </div>
        <div className="px-6">
          <div className="flex mt-4 shadow-md text-sm">
            <button
              onClick={() => setTab("all")}
              className={`px-3 text-gray-500 flex flex-col justify-between ${
                tab === "all" ? "text-orange-500" : ""
              }`}
            >
              All (9)
              {tab === "all" && (
                <div className="border-b-2 border-orange-500"></div>
              )}
            </button>

            <button
              onClick={() => setTab("unRead")}
              className={`px-3 text-gray-500 flex flex-col justify-between ${
                tab === "unRead" ? "text-orange-500" : ""
              }`}
            >
              Unread (2)
              {tab === "unRead" && (
                <div className="border-b-2 border-orange-500"></div>
              )}
            </button>
            <button
              onClick={() => setTab("payments")}
              className={`px-3 text-gray-500 flex flex-col justify-between ${
                tab === "payments" ? "text-orange-500" : ""
              }`}
            >
              Payments (3)
              {tab === "payments" && (
                <div className="border-b-2 border-orange-500"></div>
              )}
            </button>
            <button
              onClick={() => setTab("myLoan")}
              className={`px-3 text-gray-500 flex flex-col justify-between ${
                tab === "myLoan" ? "text-orange-500" : ""
              }`}
            >
              My Loan (2)
              {tab === "myLoan" && (
                <div className="border-b-2 border-orange-500"></div>
              )}
            </button>
          </div>
          {tab === "all" && (
            <div className="mt-6 space-y-4 text-sm">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">EMI by Sal Ratio</h3>
                  <p className="text-gray-500 text-xs">
                    Loan Payment is 36% of salary. Customer can take more loans
                  </p>
                </div>
                <div className="mt-2">
                  <span className="py-0.5 text-xs">Loan Payments</span>
                  <div className="w-full h-2 bg-gray-200 rounded mt-1">
                    <div className="h-2 bg-green-500 rounded w-[36%]"></div>
                  </div>
                </div>
                <div className="border-b border-gray-200" />
              </div>
              <div className="flex items-start space-x-3     bg-white    w-[420px]">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-50">
                  <EmailIcon />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-sm font-medium  ">
                    Maria Cambell’s Email looks like a potential lead or upsell
                  </h2>
                  <p className="text-gray-600 text-xs mt-1">
                    “I’m interested in learning more about service
                  </p>
                  <button className="w-[30%] mt-3 inline-block rounded-full bg-orange-500 py-2 text-sm font-medium text-white hover:bg-orange-600 transition">
                    Open email
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-white ">
                <div className="relative flex items-center justify-center w-9 h-9">
                  <CircularProgressShowIcon />
                  <span className="absolute text-xs font-bold text-black">
                    72%
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Investment Peer Comparison
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Investments of customer is more than 72% of peer group.
                    Customer id doing good in investments
                  </p>
                </div>
              </div>
              <div className="border-b border-gray-200" />
              <div className="flex items-start space-x-3 bg-white max-w-md">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-50">
                  <EmailIcon />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    Crosell opportunity
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Shivam Singh has shown interest in a car.
                    <br />
                    Email to Sagar: “Hey, I’ve been looking at this new model of
                    Maruti Suzuki…”
                  </p>
                  <button className="mt-3 inline-block rounded-full bg-orange-500 px-4 py-1.5 text-xs font-medium text-white hover:bg-orange-600 transition">
                    New Opportunity
                  </button>
                </div>
              </div>
              <div className="border-b border-gray-200" />
            </div>
          )}
          {tab === "unRead" && (
            <div>Unread notifications will apppear here</div>
          )}
          {tab === "payments" && <div>Payments notifications appear here</div>}
          {tab === "myLoan" && (
            <div>My loan notifications will apppear here</div>
          )}
        </div>
      </div>
    </div>
  );
};
export default NotificationDrawer;
