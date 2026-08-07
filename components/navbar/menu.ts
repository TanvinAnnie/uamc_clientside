export interface MenuItem {
  label: string;
  href?: string;
  children?: {
    label: string;
    href: string;
  }[];
}

export const menuItems: MenuItem[] = [
  {
    label: "HOME",
    href: "/",
  },

  {
    label: "ABOUT UAMC",
    children: [
      {
        label: "Overview",
        href: "/about/overview",
      },
      {
        label: "History of UAMC",
        href: "/about/history",
      },
      {
        label: "Vision & Mission",
        href: "/about/vision-mission",
      },
      {
        label: "Aim & Objective",
        href: "/about/aim-objective",
      },
      {
        label: "Organizational Structure",
        href: "/about/organization",
      },
      {
        label: "Founder Members",
        href: "/about/founder-members",
      },
      {
        label: "EC Members",
        href: "/about/ec-members",
      },
      {
        label: "GB Members",
        href: "/about/gb-members",
      },
    ],
  },

  {
    label: "FACILITIES",
    children: [
      {
        label: "Hospital Service",
        href: "/facilities/hospital-service",
      },
      {
        label: "Departments",
        href: "/facilities/departments",
      },
      {
        label: "Library",
        href: "/facilities/library",
      },
      {
        label: "Medical Education Unit",
        href: "/facilities/meu",
      },
      {
        label: "Training",
        href: "/facilities/training",
      },
      {
        label: "Publications",
        href: "/facilities/publications",
      },
      {
        label: "Seminar",
        href: "/facilities/seminar",
      },
      {
        label: "Hostel",
        href: "/facilities/hostel",
      },
      {
        label: "Laboratory",
        href: "/facilities/laboratory",
      },
      {
        label: "Cafeteria",
        href: "/facilities/cafeteria",
      },
    ],
  },

  {
    label: "ADMISSION",
    children: [
      {
        label: "Admission Procedure & Fees",
        href: "/admission/procedure",
      },
      {
        label: "Admission Papers",
        href: "/admission/papers",
      },
      {
        label: "Application Form",
        href: "/admission/application-form",
      },
      {
        label: "Admission Results",
        href: "/admission/results",
      },
      {
        label: "Online Registration",
        href: "/admission/online-registration",
      },
    ],
  },

  {
    label: "NOTICE & MEDIA",
    href: "/notice",
  },

  {
    label: "CAREER",
    href: "/career",
  },
];