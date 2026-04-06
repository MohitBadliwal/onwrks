import React from "react";
import CloseIcon from "../icons/CloseIcon";
import DeleteIcon from "../icons/DeleteIcon";
import LogOutIcon from "../icons/LogOutIcon";
interface INotificationDrawerProps { onClose: () => void; }
const UserProfileDrawer = ({onClose}:INotificationDrawerProps) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-end mt-12">
      <div className="bg-white w-[90%] max-w-sm shadow-lg p-4 relative text-xs text-gray-700">
        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center text-lg font-semibold text-gray-700">
              AA
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">
                Mr. Ahemad Mohamad Abdulla
              </h2>
              <p className="text-gray-600">ahemad.mohamad@gmail.com</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1">
            <CloseIcon />
          </button>
        </div>
        <div className="mt-4 space-y-3">
          <div className="space-y-1 pb-2 border-b border-gray-200">
            <p className="text-gray-500">Emirates ID</p>
            <p className="font-semibold">784-1234-5678901-2</p>
          </div>
          <div className="space-y-1 pb-2 border-b border-gray-200">
            <p className="text-gray-500">Email ID</p>
            <p className="font-semibold">Ahemad486@gmail.com</p>
          </div>
          <div className="space-y-1 pb-2 border-b border-gray-200">
            <p className="text-gray-500">Passport Number</p>
            <p className="font-semibold">345-1234-56789</p>
          </div>
          <div className="space-y-1 pb-2 border-b border-gray-200">
            <p className="text-gray-500">Age</p>
            <p className="font-semibold">38</p>
          </div>
          <div className="space-y-1 pb-2 border-b border-gray-200">
            <p className="text-gray-500">Company Name</p>
            <p className="font-semibold">CreditVerse</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500">Company Address</p>
            <p className="font-semibold">
              Thuraya Tower 1, Office 1009 - Al Sufouh - Al Sufouh 2 - Dubai -
              United Arab Emirates
            </p>
          </div>
        </div>
        <div className="py-6 space-y-4">
          <div className="flex items-center gap-3 cursor-pointer">
            <LogOutIcon size={20} />
            <span className="text-sm font-medium">Logout</span>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <DeleteIcon size={20} color="#FF0000" />
            <span className="text-sm font-medium text-red-500">
              Delete account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDrawer;
