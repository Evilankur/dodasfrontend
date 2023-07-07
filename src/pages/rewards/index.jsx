import RewardLayout from "@/Components/Layouts/RewardLayout/RewardLayout";
import Image from "next/image";
import nftimg from "../../assets/images/nft.png";
import avater from "../../assets/images/avater.png";
import Link from "next/link";

const Rewards = () => {
  const card = (
    <>
      <Link href="/rewards/singlereward">
        <div className="relative bg-white border border-gray-200 rounded-2xl shadow ">
          <Image src={nftimg} className="w-full" alt=""></Image>
          <div className="p-3 text-end">
            <div className="flex text-start font-semibold justify-between">
              <div className="flex items-center gap-2 ">
                <Image src={avater} alt="" className="w-10 h-10 rounded-full" />
                <div>
                  <p>NFT Name</p>
                  <p className="text-sm">Moonbird #5572</p>
                </div>
              </div>

              <p className="text-sm text-[#62686B]">5m ago</p>
            </div>

            <button
              type="button"
              className="text-white mt-4  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              Grab
            </button>
          </div>

          <button
            type="button"
            className="text-black  absolute top-3 left-3  bg-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-1 mr-2 mb-2 "
          >
            NFT
          </button>
        </div>
      </Link>
    </>
  );

  return (
    <section>
      <RewardLayout>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">My Rewards</h1>
            <div className="flex my-4 gap-4 items-center">
              <div className="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-6 h-6 text-gray-900 bg-gray-100 border-gray-300 focus:ring-gray-900 "
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-lg font-medium text-gray-900 "
                >
                  All Rewards
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-6 h-6 text-gray-900 bg-gray-100 border-gray-300 focus:ring-gray-900 "
                />
                <label
                  htmlFor="default-radio-2"
                  className="ml-2 text-lg font-medium text-gray-900 "
                >
                  Tokens
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-6 h-6 text-gray-900 bg-gray-100 border-gray-300 focus:ring-gray-900 "
                />
                <label
                  htmlFor="default-radio-2"
                  className="ml-2 text-lg font-medium text-gray-900 "
                >
                  NFTs
                </label>
              </div>
            </div>
          </div>
          <div>
            <form className="flex gap-5 items-center">
              <div className="relative w-full">
                <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
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
                  placeholder="Search your Reward"
                  required
                />
              </div>
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.383789"
                  y="0.995056"
                  width="43"
                  height="43"
                  rx="21.5"
                  fill="#262626"
                />
                <path
                  d="M30.9908 15.6868H12.3574L19.8108 24.5003V30.5934L23.5374 32.4568V24.5003L30.9908 15.6868Z"
                  stroke="white"
                  strokeWidth="1.86333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10">
          {card}
          {card}
          {card}
          {card}
          {card}
          {card}
        </div>
      </RewardLayout>
    </section>
  );
};

export default Rewards;
