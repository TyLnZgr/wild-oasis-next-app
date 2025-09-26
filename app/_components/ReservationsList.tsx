"use client";
import React, { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { IBooking } from "../_type/cabins";
import { deleteBooking } from "../_lib/actions";
import DeleteReservation from "./DeleteReservation";
type IProps = {
  bookings: IBooking[];
};
export default function ReservationsList({ bookings }: IProps) {
  const [optimisticBookings, optimistikDelete] = useOptimistic(
    bookings,
    (currentBookings, bookingId) => {
      return currentBookings.filter((booking) => booking.id !== bookingId);
    }
  );
  async function handleDelete(bookingId: number) {
    optimistikDelete(bookingId);
    await deleteBooking(bookingId);
  }
  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking: IBooking) => (
        <ReservationCard booking={booking} key={booking.id}>
          <DeleteReservation bookingId={booking.id} onDelete={handleDelete} />
        </ReservationCard>
      ))}
    </ul>
  );
}
