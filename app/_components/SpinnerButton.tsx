"use client";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";
type IButton = {
  children: ReactNode;
  pendingText: string;
  disabled?: boolean;
};
export default function SpinnerButton({
  children,
  pendingText,
  disabled = false,
}: IButton) {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending || disabled}
    >
      {pending ? pendingText : children}
    </button>
  );
}
