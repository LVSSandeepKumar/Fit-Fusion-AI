"use client";
import { SignOutButton } from "@clerk/nextjs";
import { FileClock, LayoutDashboard, LogOut, Settings, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "./ui/button";


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
  ];

  return (
    <div className="h-screen relative p-5 shadow-sm border">
      <div className="flex justify-center">
        <Image src="/logo.svg" alt="logo" width={120} height={100} />
      </div>

      <div className="mt-10">
        {MenuList.map((menu, index) => (
          <div key={index}
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

      <div className="absolute bottom-10 left-2 m-5">
        <SignOutButton>
          <Button className="gap-2">
            <LogOut />
            Sign Out
          </Button>
        </SignOutButton>
      </div>
    </div>
  );
};

export default SideNav;
