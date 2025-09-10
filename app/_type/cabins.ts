export interface ICabin {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string;
}
export interface IBooking {
  id: string;
  guestId: string;
  startDate: string;
  endDate: string;
  numNights: string;
  totalPrice: string;
  numGuests: number;
  status: string;
  created_at: string;
  cabins: { name: string; image: string };
}
