import { Toast } from "@/context/ToastContext";

let showToastFn: ((toast: Omit<Toast, "id">) => string) | null = null;
let updateToastFn: ((id: string, updated: Partial<Toast>) => void) | null = null;

export const setShowToastFunction = (
  fn: (toast: Omit<Toast, "id">) => string,
  updateFn?: (id: string, updated: Partial<Toast>) => void
) => {
  showToastFn = fn;
  if (updateFn) updateToastFn = updateFn;
};

export const showToast = (toast: Omit<Toast, "id">) => {
  if (showToastFn) return showToastFn(toast);
  console.warn("Toast system not ready yet.");
  return "";
};

export const updateToast = (id: string, updated: Partial<Toast>) => {
  if (updateToastFn) updateToastFn(id, updated);
  else console.warn("Toast update function not registered yet.");
};
