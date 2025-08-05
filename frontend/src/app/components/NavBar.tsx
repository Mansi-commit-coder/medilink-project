"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

function NavBar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn(
      "fixed inset-x-0 z-50 w-full bg-white",
      className
    )}>
      <Menu setActive={setActive}>
        {/* Left section*/}
        <div className="flex items-center space-x-8">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="h-8 w-auto object-contain"
          />

          <Link href={"#"}>
            <MenuItem setActive={setActive} active={active} item="Find Doctors">
              Find Doctors
            </MenuItem>
          </Link>

          <Link href={"#"}>
            <MenuItem setActive={setActive} active={active} item="Video Consult">
              Video Consult
            </MenuItem>
          </Link>

          <Link href={"#"}>
            <MenuItem setActive={setActive} active={active} item="Surgeries">
              Surgeries
            </MenuItem>
          </Link>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-8">
          <MenuItem
            setActive={setActive}
            active={active}
            item="for-corporates"
            dropdown={
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            }
          >
            <div className="flex items-center text-black dark:text-white">
              <span className="uppercase text-xs bg-[#2C2D71] text-white px-2 py-0.5 rounded-full mr-[1px]">
                New
              </span>
              <span>For Corporates</span>
              <FiChevronDown className="ml-1 w-4 h-4" />
            </div>
          </MenuItem>

          <MenuItem
            setActive={setActive}
            active={active}
            item="for-providers"
            dropdown={
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            }
          >
            <div className="flex items-center text-black dark:text-white">
              <span>For Providers</span>
              <FiChevronDown className="ml-1 w-4 h-4" />
            </div>
          </MenuItem>

          <MenuItem
            setActive={setActive}
            active={active}
            item="security-help"
            dropdown={
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            }
          >
            <div className="flex items-center text-black dark:text-white">
              <span>Security & help</span>
              <FiChevronDown className="ml-1 w-4 h-4" />
            </div>
          </MenuItem>

          <Link href={"#"}>
            <MenuItem setActive={setActive} active={active} item="Login/SignUp">
              <div className="px-4 py-1 border border-[#808080] rounded-md text-[#808080] hover:bg-[#808080] hover:text-white transition-colors duration-300">
                Login/SignUp
              </div>
            </MenuItem>
          </Link>
        </div>
      </Menu>
    </div>
  );
}

export default NavBar;
