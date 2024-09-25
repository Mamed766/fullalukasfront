"use client";
import React, { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { CartProvider } from "../../context/CartContext";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const pathname = usePathname();
  const noLayoutPages = ["/dashboard", "/", "/register"];
  const shouldShowLayout = !noLayoutPages.includes(pathname);

  const handleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <>
      <div className="z-50">
        <Sidebar
          isOpen={isSideBarOpen}
          onClose={() => setIsSideBarOpen(false)}
        />
      </div>
      <CartProvider>
        <div className="">
          {shouldShowLayout && <Header handleSideBar={handleSideBar} />}
          {children}
          {shouldShowLayout && <Footer />}
        </div>
      </CartProvider>
    </>
  );
};

export default Layout;
