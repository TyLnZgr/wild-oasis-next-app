import React, { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Loading from "./loading";
import FilterCabin from "../_components/FilterCabin";
// export const revalidate = 3600;
//Metadata
export const metadata = {
  title: "Cabins",
};
export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const capacityParam = searchParams?.capacity;
  const filter: string = Array.isArray(capacityParam)
    ? capacityParam[0]
    : capacityParam ?? "all";
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <FilterCabin />
      </div>

      <Suspense fallback={<Loading />}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
