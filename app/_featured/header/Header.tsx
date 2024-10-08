"use client";
import { TfiSearch } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { TfiAngleDown } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import "./header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import HeaderCircle from "@/app/components/HeaderCircle/HeaderCircle";
import Dropdown from "@/app/components/Dropdown/Dropdown";
import Search from "@/app/components/Search/Search";
import { homeItems } from "@/app/_static/mockdb";
import { deleteCookie } from "cookies-next";
import { useContext, useState } from "react";
import { CartContext } from "@/app/context/CartContext";

const Header = ({ handleSideBar }: any) => {
  const router = useRouter();
  const { cartCount } = useContext(CartContext);

  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    deleteCookie("token");

    window.location.reload();
    router.push("/");
  };

  const handleSearch = () => {
    router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <>
      <div className="fixed top-0 w-full z-20   bg-white">
        <div className="max-w-screen-xl mx-auto pt-10">
          <div className="flex items-center px-10 justify-between">
            <div onClick={handleSideBar} className="header__xl cursor-pointer">
              <RxHamburgerMenu />
            </div>
            <div className="header__mobile">
              <Search
                value={searchQuery}
                onChange={(value) => setSearchQuery(value)}
                onSearch={handleSearch}
              />
            </div>
            <div></div>
            <div className="flex gap-5">
              <div>
                <CiUser className="text-[2rem] header__mobile cursor-pointer" />
              </div>
              <div className="relative header__mobile cursor-pointer">
                <CiHeart className="text-[2rem]" />
                <HeaderCircle number={0} />
              </div>
              <div
                onClick={() => router.push("/cart")}
                className="relative cursor-pointer"
              >
                <CiShoppingCart className="text-[2rem]" />
                <HeaderCircle number={cartCount} />
              </div>
              <div>
                <button onClick={handleLogout} className="text-red-500">
                  LOGOUT
                </button>
              </div>
            </div>
          </div>
          <div className="header__xl pb-5 mt-2 px-2">
            <Search
              value={searchQuery}
              onChange={(value) => setSearchQuery(value)}
              onSearch={handleSearch}
            />
          </div>
        </div>
        <div className="border header__mobile p-5 mt-5">
          <div className="flex max-w-[1100px] mx-auto   justify-between">
            <div>
              <p className="flex cursor-pointer items-center gap-2 font-semibold">
                BROWSE CATEGORIES <TfiAngleDown className="text-[14px] gap-2" />
              </p>
            </div>
            <div className="">
              <ul className="flex gap-2">
                <li
                  onClick={() => router.push("/home")}
                  className="flex relative group   cursor-pointer font-semibold gap-2 items-center"
                >
                  HOME <TfiAngleDown className="text-[10px]" />
                  <Dropdown items={homeItems} />
                </li>
                <li
                  onClick={() => router.push("/shop")}
                  className="flex relative group  cursor-pointer font-semibold gap-2 items-center"
                >
                  SHOP <TfiAngleDown className="text-[10px]" />
                </li>
                <li className="flex  cursor-pointer font-semibold gap-2 items-center">
                  PRODUCT <TfiAngleDown className="text-[10px]" />
                </li>
                <li className="flex  cursor-pointer font-semibold gap-2 items-center">
                  PAGES <TfiAngleDown className="text-[10px]" />
                </li>
                <li
                  onClick={() => router.push("/contact")}
                  className="flex  cursor-pointer font-semibold gap-2 items-center"
                >
                  CONTACT <TfiAngleDown className="text-[10px]" />
                </li>
                <li
                  onClick={() => router.push("/dashboard")}
                  className="flex  cursor-pointer font-semibold gap-2 items-center"
                >
                  DASHBOARD!
                </li>
              </ul>
            </div>
            <div className="flex gap-3">
              <div className="flex  cursor-pointer items-center">
                <FiPhone className="text-[20px]" />
                <p>(+800) 1234 56</p>
              </div>
              <div className="flex  cursor-pointer items-center">
                <CiLocationOn className="text-[22px]" />
                <p>Our Stores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
