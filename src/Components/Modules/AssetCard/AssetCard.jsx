import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ScaleLoader } from "react-spinners";
import { getChainNameById } from "../NFTCard/NFTCard";

const AssetCard = ({ asset }) => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    imageURL,
    orgName,
    token_name,
    project_description,
    chain_id,
    contract_address,
    token_id,
  } = asset._source;

  const chainName = getChainNameById(chain_id);

  return (
    <Link
      href={`/assets/${orgName}/${chainName}/${contract_address}/${token_id}/`}
    >
      <div className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow ">
        <div>
          <div className="relative">
            {isLoading && (
              <div className="h-full p-5  bg-gray-500 animate-pulse  w-full top-0  absolute flex justify-center items-center"></div>
            )}
            <Image
              width={500}
              height={300}
              onLoadingComplete={() => setIsLoading(false)}
              src={
                imageURL
                  ? imageURL
                  : "https://dodas.xyz/static/media/IMAGE-NOT-AVAILABLE.982aeb95.jpg"
              }
              alt=""
            />
          </div>
        </div>
        <div className="p-2">
          <h5 className="mb-2 text-2xl font-bold  text-gray-900 ">
            {token_name}
          </h5>
          <p className="mb-3 text-sm font-semibold text-black">
            {project_description.slice(0, 100)}...
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AssetCard;
