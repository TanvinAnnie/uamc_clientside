import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full border-b border-slate-200 bg-[#f8f8f8]">
      <div
        className="
          flex
          flex-col
          gap-4

          px-4
          py-3

          sm:px-6

          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-8

          xl:px-12

          2xl:px-20
        "
      >
        {/* ================= Left ================= */}

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          {/* Address */}

          <div className="flex items-start gap-2.5">
            <MapPin
              size={18}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-slate-500"
            />

            <div className="leading-4">
              <p className="text-sm font-medium text-slate-700">
                House - 34, Road - 4, Sector - 9,
              </p>

              <p className="text-sm text-slate-500">
                Sonargaon Janapath, Uttara Model Town
              </p>
            </div>
          </div>

          {/* Email */}

          <Link
            href="mailto:info@uamc.com"
            className="flex items-center gap-2 text-sm text-slate-600 transition hover:text-emerald-600"
          >
            <Mail
              size={18}
              strokeWidth={1.8}
            />

            <span>info@uamc.com</span>
          </Link>

          {/* Phone */}

          <Link
            href="tel:+8801700220000"
            className="flex items-center gap-2 text-sm text-slate-600 transition hover:text-emerald-600"
          >
            <Phone
              size={18}
              strokeWidth={1.8}
            />

            <span>+880 1700-220000</span>
          </Link>
        </div>

        {/* ================= Right ================= */}

        <div className="flex flex-wrap items-center gap-y-2">
          <Link
            href="#"
            className="px-4 text-sm font-medium text-slate-700 transition hover:text-emerald-600"
          >
            Student Portal
          </Link>

          <div className="hidden h-5 w-px bg-slate-300 md:block" />

          <Link
            href="#"
            className="px-4 text-sm font-medium text-slate-700 transition hover:text-emerald-600"
          >
            Teachers Portal
          </Link>

          <div className="hidden h-5 w-px bg-slate-300 md:block" />

          <Link
            href="#"
            className="px-4 text-sm font-medium text-slate-700 transition hover:text-emerald-600"
          >
            Alumni
          </Link>

          <div className="hidden h-5 w-px bg-slate-300 md:block" />

          <Link
            href="#"
            className="px-4 text-sm font-medium text-slate-700 transition hover:text-emerald-600"
          >
            Events
          </Link>

          <div className="hidden h-5 w-px bg-slate-300 md:block" />

          <Link
            href="#"
            className="pl-4 text-sm font-medium text-slate-700 transition hover:text-emerald-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}