"use client";

import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: (value: string) => void;
  active: string;
  filter: string;
};
export default function FilterButton(props: ButtonProps) {
  const { children, onClick, active, filter } = props;
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        active === filter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => onClick(filter)}
    >
      {children}
    </button>
  );
}
