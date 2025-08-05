"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import SearchSection from "./SearchSection";
import BottomNav from "./BottomNav";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <>
      <NavBar />
      {isHomePage && <SearchSection />}
      {children}
      <BottomNav />
    </>
  );
}