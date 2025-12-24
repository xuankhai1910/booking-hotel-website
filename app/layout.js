import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({ subsets: ["vietnamese"], display: "swap" });
console.log(josefin);

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
export const metadata = {
  // title: "Booking Hotel",
  title: {
    template: "%s | Booking Hotel",
    default: "Booking Hotel",
  },
  description: "Nhà nghỉ sang trọng phù hợp với mọi túi tiền",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vn">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
