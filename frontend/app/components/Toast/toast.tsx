import { toast } from "react-toastify";

export const notify = {
  success: (msg: string) =>
    toast.success(msg, {
      icon: <span>✅</span>,
    }),

  error: (msg: string) =>
    toast.error(msg, {
      icon: <span>❌</span>,
    }),

  info: (msg: string) =>
    toast.info(msg, {
      icon: <span>ℹ️</span>,
    }),

  warning: (msg: string) =>
    toast.warning(msg, {
      icon: <span>⚠️</span>,
    }),

  alert: (msg: string) =>
    toast(msg, {
      icon: <span>🚨</span>,
      style: {
        background: "#fff3cd",
        color: "#856404",
      },
    }),
};