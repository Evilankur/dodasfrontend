import Header from "@/Components/Modules/Header/Header";
import Image from "next/image";
import banner from "../../assets/images/banner.png";
import profile from "../../assets/images/profile.png";
import nftprofile from "../../assets/images/nftprofile.png";

const Calender = () => {
  return (
    <section>
      <div className="relative">
        <Header></Header>
      </div>
      {/* <div className="relative z-10 ">
        <div className="w-full z-10 absolute top-0 left-0 mx-atuo">
          <Image src={banner} className="w-full z-10"></Image>
        </div>
      </div>
      <div className="relative px-32 py-20 flex justify-between z-50">
        <div>
          <Image className="z-50 relative" src={profile}></Image>
          <h1 className="text-6xl  text-white font-semibold">
            Homo <br /> Cyberpunk
          </h1>
        </div>
        <div>
          <Image
            className="border-8 w-full border-white rounded-[30px]"
            src={nftprofile}
          ></Image>
        </div>
      </div> */}
    </section>
  );
};

export default Calender;
