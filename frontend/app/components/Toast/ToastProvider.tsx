"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      theme="colored"
      style={{ zIndex: 9999 }}
      newestOnTop
      pauseOnFocusLoss
      pauseOnHover
      closeOnClick
      draggable
    />
  );
};

export default ToastProvider;