export interface ICabin {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image?: string;
  created_at?: number;
  description: string;
}
export interface IGuest {
  id: number;
  fullName: string;
  email: string;
  nationalId: string;
  nationality: string;
  countryFlag: string;
  phoneNumber: string;
  created_at?: number;
}
export interface ISettings {
  id: number;
  created_at?: string;
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
}
export interface IBooking {
  id: number;
  guestId: number;
  cabinId: number;
  startDate: string;
  endDate: string;
  cabinPrice: number;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  status: string;
  created_at?: string;
  observations: string;
  hasBreakfast: boolean;
  isPaid: boolean;
}
