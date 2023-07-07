import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import logo from "../../../assets/logo/dodas-logo.png";
import SideNav from "../SideNav/SideNav";

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [sidebarShow, setSidebarShow] = useState(false);

  return (
    <nav>
      <div className="px-4 w-full z-50 overflow-hidden relative  text-white items-center py-3 flex justify-around ">
        <div className="flex items-center  w-full  gap-10 lg:gap-x-24">
          <div className="w-24">
            <Link href="/">
              <Image src={logo} className="w-full" alt="BHM Logo" />
            </Link>
          </div>
          <div className="relative md:block hidden mr-0 lg:mr-0 md:mr-60">
            <input
              type="text"
              className="py-2 lg:py-3 text-gray-900 text-sm px-5 border-[#000000]/10  rounded-2xl w-full xl:w-[347px]"
              placeholder="Search here"
            />
            <span>
              <svg
                className="w-4 hover:cursor-pointer lg:w-6 h-4 lg:h-6 absolute top-1/4 text-[#000000]/70 right-2 lg:right-4 "
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5355 19.4974L18.1184 16.2326C19.2209 14.8867 19.8191 13.2247 19.8169 11.5137C19.8169 9.98996 19.3453 8.5004 18.4619 7.23343C17.5784 5.96646 16.3227 4.97897 14.8535 4.39585C13.3843 3.81273 11.7677 3.66015 10.208 3.95743C8.64837 4.2547 7.21573 4.98847 6.09128 6.06594C4.96682 7.14341 4.20106 8.5162 3.89082 10.0107C3.58059 11.5052 3.73981 13.0543 4.34836 14.4621C4.95691 15.8698 5.98745 17.0731 7.30967 17.9197C8.63189 18.7662 10.1864 19.2181 11.7766 19.2181C13.5622 19.2202 15.2967 18.647 16.7013 17.5905L20.1084 20.8649C20.2018 20.9551 20.3129 21.0268 20.4354 21.0757C20.5579 21.1246 20.6893 21.1497 20.8219 21.1497C20.9546 21.1497 21.086 21.1246 21.2084 21.0757C21.3309 21.0268 21.4421 20.9551 21.5355 20.8649C21.6297 20.7754 21.7045 20.6688 21.7555 20.5515C21.8065 20.4341 21.8328 20.3083 21.8328 20.1811C21.8328 20.054 21.8065 19.9281 21.7555 19.8108C21.7045 19.6934 21.6297 19.5869 21.5355 19.4974ZM5.7464 11.5137C5.7464 10.3709 6.10007 9.25374 6.76268 8.30351C7.42528 7.35328 8.36707 6.61266 9.46895 6.17532C10.5708 5.73798 11.7833 5.62355 12.953 5.8465C14.1228 6.06946 15.1973 6.61979 16.0406 7.42789C16.884 8.23599 17.4583 9.26558 17.691 10.3865C17.9236 11.5073 17.8042 12.6691 17.3478 13.725C16.8914 14.7808 16.1185 15.6833 15.1268 16.3182C14.1352 16.9531 12.9693 17.292 11.7766 17.292C10.1773 17.292 8.64349 16.6832 7.51261 15.5996C6.38173 14.5159 5.7464 13.0462 5.7464 11.5137Z"
                  fill="#1E1E1E"
                />
              </svg>
            </span>
          </div>
        </div>

        <ul className="flex gap-10 items-center justify-around pl-32">
          <li>
            <Link
              href="/"
              className={`flex  text-lg hover:cursor-pointer text-[#1E1E1E]/50 hover:text-black items-center w-full  pl-3 pr-4 font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto ${
                router.pathname === "/discover"
                  ? "text-black underline"
                  : "text-[#1E1E1E]/50"
              }`}
            >
              Discover
            </Link>
          </li>
          <li>
            <Link
              href="/calender"
              className="flex  text-lg hover:cursor-pointer text-[#1E1E1E]/50 hover:text-black items-center w-full  pl-3 pr-4 font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto"
            >
              Calendar
            </Link>
          </li>
          <li>
            <Link
              href="/rewards"
              className={`flex  text-lg hover:cursor-pointer text-[#1E1E1E]/50 hover:text-black items-center w-full  pl-3 pr-4 font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto ${
                router.pathname === "/rewards"
                  ? "text-black underline"
                  : "text-[#1E1E1E]/50"
              }`}
            >
              Rewards
            </Link>
          </li>
        </ul>

        <ul
          className={`md:flex lg:flex  w-full left-0 p-3 py-4 gap-4 lg:z-50 items-center  font-semibold  text-black text-center md:justify-center lg:justify-end lg:static   duration-300 ease-linear absolute ${
            open ? "top-14" : "top-[-450px]"
          }`}
        >
          <li className="">
            <Link
              href="/auth/signup
            "
            >
              <button
                type="button"
                className="text-black border border-black  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2  "
              >
                Sign Up
              </button>
            </Link>
          </li>
          <li className="">
            <Link href="/auth/signin">
              <button
                type="button"
                className="text-white bg-black  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 "
              >
                Sign In
              </button>
            </Link>
          </li>

          <li>
            <svg
              width="29"
              height="21"
              viewBox="0 0 29 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.8252 10.4768H27.3252"
                stroke="black"
                strokeWidth="2.83333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.8252 1.97681H27.3252"
                stroke="black"
                strokeWidth="2.83333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.8252 18.9768H27.3252"
                stroke="black"
                strokeWidth="2.83333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
        </ul>

        {/* Toggle Button */}
        <div
          onClick={() => setOpen(!open)}
          className="h-6 ml-2  text-slate-900 w-6 lg:hidden"
        >
          {open ? (
            <AiOutlineCloseCircle className="w-6 h-6" />
          ) : (
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.23438 12H21.2344"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.23438 6H21.2344"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.23438 18H21.2344"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      <SideNav
        sidebarShow={sidebarShow}
        setSidebarShow={setSidebarShow}
      ></SideNav>
    </nav>
  );
};

export default Header;
