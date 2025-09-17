import Header from "./_components/Header";
import { ReservationsProvider } from "./context/ReservationsContext";
import "./global.css";
import { Geist } from "next/font/google";
const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: {
    template: "The Wild Oasis / %s",
    default: "Welcome The Wild Oasis",
  },
  description: "Luxurious cabin hotel located in the Sapanca/Türkiye.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased">
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationsProvider>{children}</ReservationsProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
