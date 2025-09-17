"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FilterButton from "./FilterButton";

export default function FilterCabin() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  function handleFilterChange(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`);
  }
  const activeFilter = searchParams.get("capacity") ?? "all";
  return (
    <div className="border border-primary-800 flex">
      <FilterButton
        onClick={handleFilterChange}
        active={activeFilter}
        filter="all"
      >
        All Cabins
      </FilterButton>
      <FilterButton
        onClick={handleFilterChange}
        active={activeFilter}
        filter="small"
      >
        1&mdash;3 Guests
      </FilterButton>
      <FilterButton
        onClick={handleFilterChange}
        active={activeFilter}
        filter="medium"
      >
        4&mdash;7 Guests
      </FilterButton>
      <FilterButton
        onClick={handleFilterChange}
        active={activeFilter}
        filter="large"
      >
        8&mdash;12 Guests
      </FilterButton>
    </div>
  );
}
