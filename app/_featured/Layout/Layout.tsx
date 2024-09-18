"use client";
import React, { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const pathname = usePathname();
  const noLayoutPages = ["/dashboard", "/", "/register"];
  const shouldShowLayout = !noLayoutPages.includes(pathname);

  return (
    <>
      <div className="">
        {shouldShowLayout && <Header />}
        {children}
        {shouldShowLayout && <Footer />}
      </div>
    </>
  );
};

export default Layout;
