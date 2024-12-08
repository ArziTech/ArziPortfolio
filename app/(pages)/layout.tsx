"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconAddressBook,
  IconBriefcase,
  IconDevices,
  IconHome,
  IconRobot,
  IconUserSearch,
} from "@tabler/icons-react";

export default function layout({ children }: { children: React.ReactNode }) {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-white" />,
      href: "/",
    },

    {
      title: "About",
      icon: <IconUserSearch className="h-full w-full text-white" />,
      href: "/about",
    },
    {
      title: "Portfolio",
      icon: <IconBriefcase className="h-full w-full text-white" />,
      href: "/portfolio",
    },
    {
      title: "Services",
      icon: <IconRobot className="h-full w-full text-white" />,
      href: "/services",
    },
    {
      title: "Contact",
      icon: <IconAddressBook className="h-full w-full text-white" />,
      href: "/contact",
    },
  ];
  return (
    <div className="container">
      {children}
      <div className="fixed z-[999999] h-12 right-4 lg:right-1/2 bottom-10 -translate-x-[100%] lg:translate-x-1/2 -translate-y-1/2 grid place-content-center">
        <FloatingDock
          mobileClassName="scale-150" // only for demo, remove for production
          items={links}
        />
      </div>
    </div>
  );
}
