import RewardLayout from "@/Components/Layouts/RewardLayout/RewardLayout";
import Header from "@/Components/Modules/Header/Header";
import Image from "next/image";
import image from "../../assets/images/nftfullimage.png";
import avater from "../../assets/images/avater.png";
const Singlereward = () => {
  return (
    <section>
      <RewardLayout>
        <h1 className="text-2xl font-bold">My Rewards</h1>
        <div className="grid gap-4 my-4 grid-cols-5">
          <div className="col-span-2 px-4">
            <Image src={image} alt="" />
            <button
              type="button"
              className="text-white mt-4 w-full  bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              Grab NFT
            </button>
          </div>
          <div className="col-span-3">
            <div className="flex text-start font-semibold justify-between">
              <div className="flex items-center gap-2 ">
                <Image src={avater} alt="" className=" rounded-full" />
                <div>
                  <p>NFT Name</p>
                  <p className="text-sm">Moonbird #5572</p>
                </div>
              </div>

              <p className="text-sm text-[#62686B]">5m ago</p>
            </div>
            <p className="flex gap-2 my-4 text-lg font-semibold">
              <svg
                width="19"
                height="33"
                viewBox="0 0 19 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.46332 32.3841L0.0107422 16.5314L9.4582 0.403564L18.9159 16.5385L9.46332 32.3841Z"
                  fill="black"
                />
              </svg>
              0.557 ETH
            </p>

            <div>
              <p className="text-lg font-bold"> About</p>
              <p className="font-semibold">
                Lorem ipsum dolor sit amet consectetur. Egestas ac enim
                imperdiet arcu aenean fusce ipsum amet. Urna facilisis interdum
                lobortis sagittis massa viverra tellus. Pharetra fermentum
                habitant nulla nulla hendrerit diam adipiscing. Dui suspendisse
                adipiscing lacus semper. Ullamcorper elementum pretium non
                lobortis. Faucibus aliquam malesuada amet sed fermentum.
              </p>
            </div>
            <div className="my-4">
              <p className="text-lg font-bold"> Reward</p>
              <p className="font-semibold">
                Lorem ipsum dolor sit amet consectetur. Egestas ac enim
                imperdiet arcu aenean fusce ipsum amet. Urna facilisis interdum
                lobortis sagittis massa viverra tellus. Pharetra fermentum
                habitant nulla nulla hendrerit diam adipiscing. Dui suspendisse
                adipiscing lacus semper. Ullamcorper elementum pretium non
                lobortis. Faucibus aliquam malesuada amet sed fermentum.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl my-4 font-bold">Activity for Reward</h1>
          <div className="border p-4 grid grid-cols-3 gap-4 font-semibold border-black rounded-lg">
            <div className="border-r border-black">
              <h1 className="text-lg font-bold">Activity</h1>
              <p className="my-3">
                Lorem ipsum dolor sit amet consectetur. Egestas ac enim
                imperdiet arcu aenean fusce ipsum amet. Urna facilisis interdum
                lobortis sagittis massa viverra tellus. Pharetra fermentum.
              </p>
            </div>
            <div className="border-r border-black">
              <h1 className="text-lg font-bold">Rewards </h1>
              <p className="my-3">
                Lorem ipsum dolor sit amet consectetur. Egestas ac enim
                imperdiet arcu aenean fusce ipsum amet. Urna facilisis interdum
                lobortis sagittis massa viverra tellus. Pharetra fermentum.
              </p>
            </div>
            <div>
              <h1 className="text-lg font-bold">Action</h1>
              <p className="my-3">
                Lorem ipsum dolor sit amet consectetur. Egestas ac enim
                imperdiet arcu aenean fusce ipsum amet. Urna facilisis interdum
                lobortis sagittis massa viverra tellus. Pharetra fermentum.
              </p>
            </div>
          </div>
        </div>
      </RewardLayout>
    </section>
  );
};

export default Singlereward;
