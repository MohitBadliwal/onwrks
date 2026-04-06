import { create } from "zustand";

interface DealerState {
  isAddNewBranch: boolean | null;
  setIsAddNewBranch: (type: boolean) => void;
  isBranchdetails: boolean | null;
  setIsBranchDetails: (type: boolean) => void;
  isAddStaff: boolean | null;
  setIsAddStaff: (type: boolean) => void;
  isStaffdetails: boolean | null;
  setIsStaffDetails: (type: boolean) => void;
  clearAll: () => void;
}
export const useDealerStore = create<DealerState>((set) => ({
  isAddNewBranch: null,
  setIsAddNewBranch: (type) => set({ isAddNewBranch: type }),
  isBranchdetails:null,
  setIsBranchDetails: (type) => set({ isBranchdetails: type }),
  isAddStaff: null,
  setIsAddStaff: (type) => set({ isAddStaff: type }),
  isStaffdetails: null,
  setIsStaffDetails: (type) => set({ isStaffdetails: type }),
  clearAll: () =>
    set({
     isAddNewBranch : null,
      isBranchdetails: null,
      isAddStaff: null,
      isStaffdetails: null,
      
    }),
}));

