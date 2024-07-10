"use client";
import { useState } from "react";
import { LogOut, Menu } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };

  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center max-sm:gap-2">
      <div className="font-bold text-2xl flex items-center ">
        <p>FitFusion AI</p>
      </div>
      <Menu className="w-8 h-8 md:hidden" onClick={toggleMenu} />
      {isOpen && (
        <div className="absolute top-12 right-4 bg-gray-800 text-white rounded-lg p-2 lg:hidden">
          <ul>
            <li className="py-2 border-b border-gray-700">
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="py-2 border-b border-gray-700">
              <a href="/dashboard/history">History</a>
            </li>
            <li className="py-2 border-b border-gray-700">
              <SignOutButton>
                <Button className="gap-2 ">
                  <LogOut />
                  Sign Out
                </Button>
              </SignOutButton>
            </li>
          </ul>
        </div>
      )}
      <h2 className="bg-primary p-2 rounded-full text-sm text-white max-sm:hidden">
        Enjoy AI generated Fitness Plans.
      </h2>
    </div>
  );
};

export default Header;
