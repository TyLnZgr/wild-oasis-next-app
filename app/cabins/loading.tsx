import CabinCardSkeleton from "../_components/CabinCardSkeleton";
import Spinner from "../_components/Spinner";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200 py-2">Loading cabins...</p>
      <div className="mb-6 w-full">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {Array.from({ length: 6 }).map((_, i) => (
            <CabinCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
