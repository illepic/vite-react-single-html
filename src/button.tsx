import React from "react";
import clsx from "clsx";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "info" | "action" | "warn";
};

function Button({ children, variant = "info" }: ButtonProps) {
  return (
    <button
      className={clsx("px-4 py-1 text-white rounded-md", {
        "bg-slate-800 hover:bg-slate-900": variant === "info",
        "bg-green-600 hover:bg-green-700": variant === "action",
        "bg-amber-500 hover:bg-amber-600": variant === "warn",
      })}
    >
      {children}
    </button>
  );
}

export default Button;
