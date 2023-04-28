import Image from "next/image";
import svg1 from "../../public/HomeSvg1.svg";
import image1 from "../../public/home1.jpg";
import image2 from "../../public/home2.jpg";

const HomeMain = () => {
  return (
    <div className="relative flex mt-[4rem] sm:flex-col sm:text-center justify-between">
      <div className=" flex flex-col gap-y-[1.25rem] ">
        <h2 className="text-[3.5rem] lg:text-[3rem] sm:text-[2.8rem]  leading-[4rem] sm:leading-[3rem] font-[500]">
          The one tool you <br className="sm:hidden" /> need to{" "}
          <span className="bg-gradient-to-tr from-ascentColor  to-pink-500 text-transparent  bg-clip-text ">
            make
          </span>
          <br /> any demo
        </h2>
        <p className="font-[500] text-[1rem] leading-[1.8rem] text-[#989898]">
          Upload your song idea, license a voice and <br /> let our AI turn it
          into a hit
        </p>
        <div className="flex items-center gap-x-[2rem] mt-[3rem] sm:mt-[1.5rem] sm:justify-center">
          <div
            style={{
              background:
                "linear-gradient(47.36deg, #2DF1E6 12.24%, #3694B0 37.45%, #468DB3 39.38%, #6F79BA 44.93%, #8D6BBF 49.97%, #9F63C2 54.29%, #A660C3 57.37%)",
            }}
            className="p-0.5 rounded-lg"
          >
            <button className="py-[0.85rem] px-[2rem] md:px-[1rem] sm:py-[0.5rem] rounded-lg font-[500] text-[1.1rem] md:text-[0.8rem] leading-5 bg-bgColor">
              Try for free
            </button>
          </div>
          <button
            style={{
              background:
                "linear-gradient(90deg, #23AFB7 1.46%, #169AA4 79.47%)",
            }}
            className="py-[0.85rem] px-[2rem] md:px-[1rem]  rounded-lg font-[500] text-[1.1rem] md:text-[0.8rem]  leading-5 md:leading-3"
          >
            Create Music
          </button>
        </div>
      </div>
      <div className="flex items-center sm:justify-center sm:mt-[1rem] gap-x-[2rem] lg:gap-x-[1rem] sm:gap-x-[0.5rem]">
        <Image
          src={image1}
          alt="home1"
          placeholder="blur"
          className="rounded-lg h-[25rem] w-[17.5rem] lg:h-[20rem] lg:w-[14rem] md:h-[18rem] md:w-[12rem] sm:h-[16rem] sm:w-[10rem]"
        />
        <Image
          src={image2}
          alt="home1"
          placeholder="blur"
          className="rounded-lg h-[20rem] w-[16.25rem] lg:h-[17rem] lg:w-[13rem] md:h-[16rem] md:w-[10rem] sm:h-[14rem] sm:w-[8rem]"
        />
      </div>
      <Image
        src={svg1}
        alt="svg1"
        className="h-[3rem] aspect-square absolute right-60 lg:right-40 -top-10"
      />
      <Image
        src={svg1}
        alt="svg2"
        className="h-[3rem] aspect-square absolute left-[25rem] bottom-20 lg:left-[20rem]"
      />
      <div
        style={{
          background:
            "linear-gradient(47.36deg, #2DF1E6 12.24%, #3694B0 37.45%, #468DB3 39.38%, #6F79BA 44.93%, #8D6BBF 49.97%, #9F63C2 54.29%, #A660C3 57.37%)",
          boxShadow:
            "0px 4px 8px rgba(0, 0, 0, 0.05), inset 0px 2px 10px rgba(0, 0, 0, 0.05)",
        }}
        className="h-[2rem] aspect-square rounded-full absolute -bottom-10 right-10 "
      />

      {/* gradient blur background */}
      <div
        style={{
          background: "#B843B7",
          filter: "blur(200px)",
        }}
        className="h-[12.5rem] aspect-square rounded-full absolute -bottom-10 right-0"
      />
      <div
        style={{
          background: "#B843B7",
          filter: "blur(200px)",
        }}
        className="h-[12.5rem] aspect-square rounded-full absolute bottom-[50%] right-[50%]"
      />
      <div
        style={{
          background: "#B843B7",
          filter: "blur(200px)",
        }}
        className="h-[9.3rem] aspect-square rounded-full absolute -top-20 right-0"
      />
    </div>
  );
}

export default HomeMain