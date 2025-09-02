import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
  className?: string;
}

export const Button = ({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-2.5 font-medium transition-all duration-200 rounded-md text-sm";

  const variants = {
    primary:
      "bg-primary-600 hover:bg-primary-700 text-white shadow-sm hover:shadow",
    secondary:
      "bg-secondary-500 hover:bg-secondary-600 text-white shadow-sm hover:shadow",
    outline: "border border-primary-600 text-primary-600 hover:bg-primary-50",
  };

  return (
    <button
      className={twMerge(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
