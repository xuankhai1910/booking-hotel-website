import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image
        src="/logo.png"
        alt="Booking hotel logo"
        height="60"
        width="60"
        className=" border-primary-500 border-2 rounded-full object-contain"
      /> */}

      <Image
        src={logo}
        alt="Booking hotel logo"
        quality={100}
        height="60"
        width="60"
        className=" border-primary-500 border-2 rounded-full object-contain"
      />
      <span className="text-xl font-semibold text-primary-100">
        Booking Hotel
      </span>
    </Link>
  );
}

export default Logo;
