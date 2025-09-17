"use client";
import { createContext, useContext, useState } from "react";
import { DateRange } from "react-day-picker";

type ReservationsContextType = {
  range: DateRange | undefined;
  setRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  resetRange: () => void;
};

const ReservationsContext = createContext<ReservationsContextType | undefined>(
  undefined
);

const initialState: DateRange | undefined = { from: undefined, to: undefined };

function ReservationsProvider({ children }: { children: React.ReactNode }) {
  const [range, setRange] = useState<DateRange | undefined>(initialState);
  const resetRange = () => setRange(initialState);
  return (
    <ReservationsContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationsContext.Provider>
  );
}

function useReservations() {
  const context = useContext(ReservationsContext);
  if (context === undefined) {
    throw new Error(
      "useReservations must be used within a ReservationsProvider"
    );
  }
  return context;
}

export { ReservationsProvider, useReservations };
