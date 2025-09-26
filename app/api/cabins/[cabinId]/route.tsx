import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { cabinId: string } }
) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return NextResponse.json({ cabin, bookedDates });
  } catch {
    return NextResponse.json({ error: "Cabin not found" }, { status: 404 });
  }
}
