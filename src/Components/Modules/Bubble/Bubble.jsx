import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/router";
import { getChainNameById } from "../NFTCard/NFTCard";

const Bubble = ({ singlebubble, order }) => {


  const { imageURL,token_name  }=singlebubble?._source    

  const [showTooltip, setShowTooltip] = useState(false);
  // const bubbleInfo = singlebubble.contractInfo;
  const router = useRouter();

  const textRef = useRef(null);

  // Copy Contract Id
  const handleCopyClick = () => {
    textRef.current.select();
    document.execCommand("copy");
    toast.success("Contract Address Copied!");
  };

  const handleBubbleClick = async contract_address => {
    // Fetch THE recods By the contract Address

    // const data = await findDatabyContractid(contract_address);

    // Use The First Record To get The orgName, Chainame, TokenId

    // const { chain_id, token_id, orgName } =
    //   data.data.result.hits.hits[0]._source;

    // Redirect to the detail page

    // const chainName = getChainNameById(chain_id);
    // router.push(
    //   `/assets/${orgName}/${chainName}/${contract_address}/${token_id}/`
    // );
  };

  return (
    <>
      
        <div
  
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="mx-4 relative"
          style={{ width: `calc(180px - ${5 * order}px)` }}
        >
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showTooltip ? 1 : 0 }}
            transition={{ duration: 0.1 }}
            className={`absolute  text-start font-semibold text-xs spcae-y-4    -top-10 rounded-lg shadow-2xl drop-shadow-2xl bg-gray-200 w-60 p-4 z-[60] -right-52`}
          >
            <h1>Market Cap Price : ${data?.market_cap?.usd}</h1>
            <h1>Floor Price : ${data?.floor_price?.usd}</h1>

            <h1>Total Supply : {data?.total_supply}</h1>
            <div className="relative  overflow-hidden flex items-center">
              <label htmlFor="">ContractAddress:</label>
              <button
                className="ml-1 h-full border-[1px] border-gray-600 p-0.5 bg-white"
                onClick={handleCopyClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  />
                </svg>
              </button>
              <input
                className="bg-transparent p-0.5 text-ellipsis border-[1px] border-l-0 rounded-r-md border-gray-600  outline-none w-full"
                type="text"
                defaultValue={` ${data.contractAddress}`}
                ref={textRef}
              ></input>
            </div>
          </motion.div> */}

          <div onClick={() => handleBubbleClick(data.contractAddress)}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1, delay: order * 0.1 }}
              className={`relative  z-50 cursor-pointer flex justify-center items-center overflow-hidden rounded-full`}
            >
            
              <svg
                className="absolute w-full  top-0 left-0"
                viewBox="0 0 111 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="55.5982"
                  cy="32.5427"
                  rx="54.7115"
                  ry="32.2919"
                  transform="rotate(1.31904 55.5982 32.5427)"
                  fill="url(#paint0_linear_198_1162)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_198_1162"
                    x1="55.5982"
                    y1="0.250801"
                    x2="55.5982"
                    y2="64.8346"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopOpacity="0.44" />
                    <stop
                      offset="0.885417"
                      stopColor="white"
                      stopOpacity="0.02"
                    />
                  </linearGradient>
                </defs>
              </svg>

             
              <svg
                width="31"
                height="19"
                className="absolute top-2 left-1/4 z-40"
                viewBox="0 0 31 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="15.7386"
                  cy="9.41041"
                  rx="16.0691"
                  ry="7.64674"
                  transform="rotate(-21.8222 15.7386 9.41041)"
                  fill="url(#paint0_radial_198_1163)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_198_1163"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(15.7386 9.41041) rotate(90) scale(7.64674 16.0691)"
                  >
                    <stop
                      offset="0.760417"
                      stopColor="white"
                      stopOpacity="0.88"
                    />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              <svg
                className="w-full z-40 h-full"
                viewBox="0 0 163 164"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="81.474"
                  cy="82.3558"
                  r="81.474"
                  fill="url(#paint0_radial_198_1161)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_198_1161"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(81.474 82.3558) rotate(90) scale(81.474)"
                  >
                    <stop
                      offset="0.854167"
                      stopColor="#C4C4C4"
                      stopOpacity="0"
                    />
                    <stop offset="1" stopOpacity="0.69" />
                  </radialGradient>
                </defs>
              </svg>

              <div className="text-center p-3 flex flex-col items-center justify-center absolute top-0 left-0  z-40 w-full h-full ">
        
                <Image
                  src={
                    imageURL
                      ? imageURL
                      : "https://dodas.xyz/static/media/IMAGE-NOT-AVAILABLE.982aeb95.jpg"
                  }
                  width={60}
                  height={60}
                  className="w-10 h-10 rounded-full "
                  alt=""
                />

                <h1 className={`text-center text-sm   font-bold`}>
                  {" "}
                  {token_name}
                </h1>
              </div>
            </motion.div>
          </div>
        </div>
     
      <Toaster />
    </>
  );
};

export default Bubble;

export async function findDatabyContractid(contratID) {
  const payLoad = {
    client_id: "la0tq3jlj879usm4ci",
    contract_address: contratID,
    querysearch: "",
    page: 1,
    limit: 18,
  };
  const response = await fetch(
    "https://dodas.xyz/api/searchRecordsByContractAddress",
    {
      method: "POST",
      body: JSON.stringify(payLoad),
      headers: {
        "Content-Type": "application/json",
        "api-key": "uqwyehdbstygwqevdystfrwebnasdfjhre",
      },
    }
  );
  const data = await response?.json();

  return { data };
}
