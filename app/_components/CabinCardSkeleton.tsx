import React from "react";

export default function CabinCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl bg-primary-900 p-4 shadow-md">
      <div className="h-48 w-full rounded-xl bg-primary-700 mb-4"></div>
      <div className="h-6 w-3/4 rounded bg-primary-700 mb-3"></div>
      <div className="h-4 w-1/2 rounded bg-primary-700"></div>
    </div>
  );
}
