import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed top-0 z-40 flex flex-col bg-clip-border  bg-white text-gray-700 h-screen w-full max-w-[20rem]  shadow-xl shadow-blue-gray-900/5 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <Link className="w-full py-3" href="/">
                Home
              </Link>
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
            </div>
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <Link className="w-full py-3" href="/shop">
                Shop
              </Link>
              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
            </div>

            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <Link className="w-full py-3" href="/dashboard">
                Dashboard
              </Link>

              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
            </div>

            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <Link className="w-full py-3" href="/contact">
                Contact
              </Link>

              <div className="grid place-items-center mr-4">
                <FaAngleRight />
              </div>
            </div>
          </nav>
          <div
            role="button"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          ></div>
        </nav>
      </div>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed top-0 z-30 h-full w-full bg-black/70"
        ></div>
      )}
    </>
  );
};
export default Sidebar;
