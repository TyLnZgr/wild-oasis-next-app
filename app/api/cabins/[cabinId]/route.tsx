import { NextRequest, NextResponse } from "next/server";
import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ cabinId: string }> }
) {
  const { cabinId } = await context.params;

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
