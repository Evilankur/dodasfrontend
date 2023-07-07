import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import logo from "../../../assets/logo/dodas-logo.png";
import Bubble from "../Bubble/Bubble";
import SideNav from "../SideNav/SideNav";
import { motion } from "framer-motion";
import NFTCard from "../NFTCard/NFTCard";
import SearchResult from "../SearchResults/SearchResult";

const Hero = () => {
  const [searchTerm, setSearhTerm] = useState("pix");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(false);
  const [sidebarShow, setSidebarShow] = useState(false);
  const [data, setdata] = useState([]);
  const [searchData, setSeachData] = useState([]);

  const payload = {
    querysearch: {
      from: 0, size: 18,
      query: {
        multi_match: {
          query: searchTerm,
          fields: ["orgName", "description", "marketplace"],
          type: "phrase_prefix"
        }
      },
      sort: [
        {
          priority: {
            order: "asc"
          },
          created_on: {
            order: "desc"
          }
        }
      ]
    }
  };



  const base_url = `${process.env.NEXT_PUBLIC_BASE_URL}api/search_record`;

  const config = {
    headers: {
      "content-type": "application/json",
      "api-key": process.env.NEXT_PUBLIC_API_KEY,
       accept: "*",
      "access-control-allow-origin": "*",
      "access-token": process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    },
  };

  // Inital Data
  useEffect(() => {
    console.log("rendered");
    setLoading(true);
    axios.post(base_url,payload, config)
      .then(response => {
      setdata(response.data.result.hits.hits);
      console.log(response);
      setLoading(false);
    });
  }, []);



  // Searched Data
  const handleSearch = e => {
  
    e.preventDefault();
    setLoading(true);
    setSearch(true);
    axios
      .post(base_url, payload, config)
      .then(response => {
        setSeachData(response.data.result.hits.hits);
        console.log(response);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="overflow-hidden">
      <nav>
        <div className="px-4 w-full z-50  relative container mx-auto text-white items-center py-3 flex justify-around ">
          <div className="flex items-center  w-full  gap-10 lg:gap-x-24"></div>

          <ul className="flex gap-10 items-center justify-around pl-20">
            <li>
              <Link
                href="/"
                className="flex  text-lg hover:cursor-pointer text-[#1E1E1E]/50 hover:text-black items-center w-full  pl-3 pr-4 font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto"
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
                className="flex  text-lg hover:cursor-pointer text-[#1E1E1E]/50 hover:text-black items-center w-full  pl-3 pr-4 font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto"
              >
                Rewards
              </Link>
            </li>
          </ul>

          <ul
            className={`md:flex lg:flex  w-full left-0 p-3 py-4 gap-4 lg:z-50 items-center  font-semibold  text-black text-center md:justify-center lg:justify-end  
            `}
          >
            <li className="">
              <Link href="#">
                <button
                  type="button"
                  className="text-black border border-black  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2  "
                >
                  Sign Up
                </button>
              </Link>
            </li>
            <li className="">
              <Link href="#">
                <button
                  type="button"
                  className="text-white bg-black  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 "
                >
                  Sign In
                </button>
              </Link>
            </li>

            <li>
              <button onClick={() => setSidebarShow(!sidebarShow)}>
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
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <section className="container w-full flex flex-col justify-center mt-10 items-center mx-auto">
        <Image src={logo} alt="" />

        <form
          onChange={handleSearch}
          className="w-[818px] text-[#5A5A5A] mt-10"
        >
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-[#5A5A5A] sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-6 font-semibold pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              onChange={e => setSearhTerm(e.target.value)}
              className="block font-semibold text-lg w-full p-4 pl-14  text-[#5A5A5A] border border-[#5A5A5A] rounded-full bg-gray-50 focus:ring-gray-900 focus:border-gray-900 "
              placeholder="Search your NFT"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-white hover:text-black shadow-lg font-medium rounded-full text-sm px-6 py-3 "
            >
              Search
            </button>
          </div>
        </form>
        
        {loading ? (
          <div className="flex justify-center items-center w-full h-60">
            <HashLoader color="#070619" />
          </div>
        ) : (
          <>
            {search ? (
              <>
                {searchData.length === 0 ? (
                  <>
                    <h1 className="text-red-500 font-bold my-4 text-xl">
                      No record found!
                    </h1>
                  </>
                ) : (
                  <>
                        <SearchResult searchData={searchData} />
                
                        {/* <div className="grid w-[818px] p-10 bg-gray-200 rounded-lg grid-cols-2 gap-10">
                      {searchData.map((data, i) => (
                        <NFTCard key={i} index={i} data={data}></NFTCard>
                      ))}
                    </div> */}
                  </>
                )}
              </>
            ) : (
              <>
                <motion.div
                  animate={{ opacity: searchData.length === 0 ? 1 : 0 }}
                  className="relative mt-10 grid-cols-4 grid gap-8 "
                >
                  {data?.map((singlebubble, index) => (
                    <Bubble
                      singlebubble={singlebubble}
                      order={index}
                      key={singlebubble._id}
                    />
                  ))}
                </motion.div>
              </>
            )}
          </>
        )}
      </section>

      <SideNav
        sidebarShow={sidebarShow}
        setSidebarShow={setSidebarShow}
      ></SideNav>
    </div>
  );
};

export default Hero;
