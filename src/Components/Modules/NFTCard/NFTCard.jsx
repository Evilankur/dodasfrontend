import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ScaleLoader } from "react-spinners";

const NFTCard = ({ data, index }) => {
  console.log(data);
  // const {
  //   imageURL,
  //   token_name,
  //   orgName,
  //   token_id,
  //   chain_id,
  //   contract_address,
  // } = data._source;

  // const chainName = getChainNameById(chain_id);
  // console.log(chainName);

  return (
    <div>
      <p>Card</p>
    </div>
    // <Link href={`/assets/${orgName}/${chainName}/${contract_address}/${token_id}/`}>
    //   <div className="flex items-center gap-3 font-semibold">
    //     <img loading="lazy" src={imageURL} className="w-10 h-14" alt="" />
    //     <div>
    //       <h1 className="z-50 text-lg hover:underline">{orgName}</h1>
    //       <p className="z-50 text-sm hover:underline">{token_id}</p>
    //     </div>
    //   </div>
    // </Link>
  );
};

export default NFTCard;

export function getChainNameById(chainId) {
  let chainName = "";
  switch (chainId) {
    case 1: {
      chainName = "ethereum";
      break;
    }
    case 56: {
      chainName = "bsc";
      break;
    }
    case 137: {
      chainName = "polygon";
      break;
    }
    case 43114: {
      chainName = "avalanche";
      break;
    }
    default: {
      chainName = "ethereum";
    }
  }
  return chainName;
}
