import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Logo() {
  return (
    <div className="flex items-center">
      {/* ================= Logo ================= */}

      <Link
        href="/"
        className="flex items-center shrink-0"
      >
        <Image
          src="/logo.png"
          alt="UAMC Logo"
          width={58}
          height={58}
          priority
          className="h-14 w-14 object-contain"
        />

        <div className="ml-3">
          <h1 className="text-[17px] font-bold leading-5 text-slate-900">
            Uttara Adhunik
          </h1>

          <p className="mt-0.5 whitespace-nowrap text-[14px] font-medium leading-4 text-slate-600">
            Medical College (UAMC)
          </p>
        </div>
      </Link>

      {/* ================= Divider ================= */}

      <div className="mx-6 hidden h-8 w-px bg-slate-300 xl:block" />

      {/* ================= Social ================= */}

      <div className="hidden items-center gap-4 xl:flex">
        <Link
          href="#"
          className="text-slate-700 transition hover:text-emerald-600"
        >
          <FaFacebookF size={14} />
        </Link>

        <Link
          href="#"
          className="text-slate-700 transition hover:text-emerald-600"
        >
          <FaYoutube size={15} />
        </Link>

        <Link
          href="#"
          className="text-slate-700 transition hover:text-emerald-600"
        >
          <FaLinkedinIn size={14} />
        </Link>

        <Link
          href="#"
          className="text-slate-700 transition hover:text-emerald-600"
        >
          <FaInstagram size={14} />
        </Link>
      </div>
    </div>
  );
}