import AssetCard from "@/Components/Modules/AssetCard/AssetCard";
import Header from "@/Components/Modules/Header/Header";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { ImageLoader } from "next/image";

const customLoader = ({ src }) => {
  if (src.startsWith("ipfs://")) {
    return src.replace("ipfs://", "https://ipfs.io/ipfs/");
  }
  return src;
};

const AssetsDetail = ({ data }) => {
  const [assetdata, setassetdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { imageURL, contract_address, project_description: description, marketplace } =
    data?.success?.data;
  console.log(data?.success?.data);

  const config = {
    headers: {
      "content-type": "application/json",
      "api-key": "uqwyehdbstygwqevdystfrwebnasdfjhre",
      accept: "application/json, text/plain, */*",
      "access-control-allow-origin": "*",
    },
  };

  // Assets Data base URLs
  const base_url = "https://dodas.xyz/api/searchRecordsByContractAddress";

  const payload = {
    client_id: "la0tq3jlj879usm4ci",
    contract_address: contract_address,
    querysearch: "",
    page: 1,
    limit: 18,
  };

  // Assets Data Fetch
  useEffect(() => {
    setloading(true);
    axios
      .post(base_url, payload, config)
      .then(response => {
        setassetdata(response.data.result.hits.hits);
        setloading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  return (
    <section>
      <Header />
      <div className="container px-10 mx-auto">
        {/* Search Bar */}
        <form className="flex my-4 items-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 right-0 flex items-center pr-10 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-[#f3f3f3]  text-[#707070] text-lg font-semibold rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
              placeholder="SandBox "
              required
            />
          </div>
        </form>

        <div className="grid grid-cols-2  gap-0">
          <div className="relative h-80 rounded-md overflow-hidden">
            {isLoading && (
              <div className="bg-gray-500 mr-4 opacity-10 absolute top-0 left-0 animate-pulse w-full h-full"></div>
            )}

            <Image
              src={
                imageURL ===
                "ipfs://QmVMVzGk8cFuUa26yreqKzofhKpwCnCnuYYkxqkd7AhyRp"
                  ? "https://dodas.xyz/static/media/IMAGE-NOT-AVAILABLE.982aeb95.jpg"
                  : imageURL
                  ? imageURL
                  : "https://dodas.xyz/static/media/IMAGE-NOT-AVAILABLE.982aeb95.jpg"
              }
              height={100}
              width={550}
              onError={e => {
                e.target.onerror = null;
                e.target.src =
                  "https://dodas.xyz/static/media/IMAGE-NOT-AVAILABLE.982aeb95.jpg";
              }}
              onLoadingComplete={() => setIsLoading(false)}
              className=" rounded-md  h-96 "
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">About</h1>
            <p className="text-base font-medium my-4 text-[#4D5156]">
              {description}
            </p>
          </div>
        </div>

        <div className="border my-4 font-semibold text-black  flex gap-20 w-fit p-6 rounded-2xl">
          <div>
            <p className="my-2">MCap: $194,719,416 USD</p>

            <div className="flex gap-3">
              Collections:{" "}
              <ul className=" space-y-1 list-disc list-inside">
                <li>Land: 100,00</li>
                <li>Avatars: 10,000</li>
                <li>In Game Assets: 200,000</li>
              </ul>
            </div>
            <p className="my-2">Social:</p>
          </div>
          <div>
            <p className="mb-4">Blockchain: Ethereum </p>
            <p className="mb-4">Marketplace: {marketplace}</p>
            <p className="mb-4">
              Website:{" "}
              <Link href="/" className="">
                https://www.sandbox.game/en/
              </Link>
            </p>
          </div>
        </div>

        <div className="flex my-10 gap-20 font-semibold">
          <div className="space-y-2">
            <p>
              Developer: <span className="text-[#1A0DAB]">PIXOWL INC.</span>{" "}
            </p>
            <p>Initial release date:May 15, 2012</p>
            <p>
              Platforms:{" "}
              <span className="text-[#1A0DAB]">
                {" "}
                Microsoft Windows, Android, iOS{" "}
              </span>{" "}
            </p>
          </div>

          <div className="space-y-2">
            <p>
              Publisher: <span className="text-[#1A0DAB]"> PIXOWL INC. </span>
            </p>
            <p>
              Mode:{" "}
              <span className="text-[#1A0DAB]"> Single-player video game </span>
            </p>
            <p>
              Genres:{" "}
              <span className="text-[#1A0DAB]">
                {" "}
                Sandbox, Open world, Simulation video game, Indie game, Casual
                game, Nonlinear gameplay, Strategy
              </span>
            </p>
          </div>
        </div>

        {/* Assets  */}

        <div className="my-10">
          <h1 className="text-3xl font-bold">Assets </h1>

          {/* Buttons */}
          <div className="my-4 flex">
            <button
              type="button"
              className="text-black hover:text-white bg-[#C9C9C9] hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-6 py-2.5 mr-2 mb-2 "
            >
              All
            </button>
            <button
              type="button"
              className="text-black hover:text-white bg-[#C9C9C9] hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-6 py-2.5 mr-2 mb-2 "
            >
              Land
            </button>
            <button
              type="button"
              className="text-black hover:text-white bg-[#C9C9C9] hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-6 py-2.5 mr-2 mb-2 "
            >
              Avatars
            </button>
            <button
              type="button"
              className="text-black hover:text-white bg-[#C9C9C9] hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-6 py-2.5 mr-2 mb-2 "
            >
              In Game Assests
            </button>
          </div>

          {loading ? (
            <>
              <div className="h-24 w-full flex justify-center items-center">
                <ScaleLoader color="#111b38" />
              </div>
            </>
          ) : (
            <>
              <div className="grid gap-8 my-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                {assetdata.slice(0, 4).map(asset => (
                  <AssetCard asset={asset} key={asset._id}></AssetCard>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const chainName = params.chainName;
  const contactid = params.contractid;
  const tokenid = params.tokenid;
  const response = await fetch(
    `https://dodas.xyz/api/assets/${chainName}/${contactid}/${tokenid}`,
    {
      headers: {
        "api-key": "uqwyehdbstygwqevdystfrwebnasdfjhre",
      },
    }
  );
  console.log(chainName, contactid, tokenid);
  const data = await response?.json();

  return {
    props: {
      data,
    },
  };
}

export default AssetsDetail;
