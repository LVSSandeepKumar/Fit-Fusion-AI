"use client";
import { FileClock, LayoutDashboard, Settings, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SideNav = () => {
  const path = usePathname();
  useEffect(() => {}, []);

  const MenuList = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: Wallet,
      path: "/dashboard/billing",
    },
  ];

  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center">
        <Image src="/logo.svg" alt="logo" width={120} height={100} />
      </div>

      <div className="mt-10">
        {MenuList.map((menu, index) => (
          <div
            className={`flex gap-2 mx-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${
              path == menu.path && "bg-primary text-white my-4"
            }`}
          >
            <Link href={menu.path} className="flex gap-2">
              <menu.icon />
              <h2>{menu.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
