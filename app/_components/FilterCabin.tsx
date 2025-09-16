"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function FilterCabin() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  function handleFilterChange(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="border border-primary-800 flex">
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilterChange("all")}
      >
        All Cabins
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilterChange("small")}
      >
        1&mdash;3 Guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilterChange("medium")}
      >
        4&mdash;7 Guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilterChange("large")}
      >
        8&mdash;12 Guests
      </button>
    </div>
  );
}
