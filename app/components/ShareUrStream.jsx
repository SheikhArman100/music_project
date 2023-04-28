import Image from "next/image";
import play from "../../public/play.svg";
import shareurstream from "../../public/shareurstream.jpg";

const ShareUrStream = () => {
  return (
    <div className="mt-[5rem] flex sm:flex-col sm:items-center gap-x-[2.5rem]">
      <div className="relative">
        <Image
          src={shareurstream}
          className="h-[25rem] w-[35rem] rounded-2xl lg:w-[30rem] sm:w-[20rem] sm:h-[18rem]"
          alt="shareurstream"
          placeholder="blur"
        />
        <div
          style={{
            background:
              "linear-gradient(47.36deg, #2DF1E6 12.24%, #3694B0 37.45%, #468DB3 39.38%, #6F79BA 44.93%, #8D6BBF 49.97%, #9F63C2 54.29%, #A660C3 57.37%)",
          }}
          className="absolute h-[6.4rem] aspect-square rounded-lg -top-3 -left-3 -z-10"
        />
        <div
          style={{
            background:
              "linear-gradient(47.36deg, #2DF1E6 12.24%, #3694B0 37.45%, #468DB3 39.38%, #6F79BA 44.93%, #8D6BBF 49.97%, #9F63C2 54.29%, #A660C3 57.37%)",
          }}
          className="absolute h-[5.7rem] aspect-square -bottom-3 -right-3 -z-10 rounded-lg p-2"
        >
          <div className="h-full aspect-square bg-bgColor" />
        </div>
        <Image
          src={play}
          alt="play"
          className="absolute h-[5rem] aspect-square top-[40%]
        left-[40%] "
        />
      </div>

      <div className="flex flex-col gap-y-[1.5rem] mt-[1rem] ">
        <h2 className="font-[700] text-[2.5rem] leading-[3.5rem] md:text-[2rem]">
          Share your{" "} 
          <span className="bg-gradient-to-tr from-ascentColor  to-purple-700 text-transparent  bg-clip-text">
            Stream
          </span>
        </h2>
        <div>
          <p className="font-[400] text-[1rem] leading-[1.7rem]">
            What if you could have a team of highly skilled artificial
            <br />
            intelligent music composers at your disposal to write a smash
            <br /> hit song?
          </p>
          <p className="font-[400] text-[1rem] leading-[1.7rem]">
            Upload your song idea, license any voice in our catalog and let a{" "}
            <br />
            professional perform your next hit.
          </p>
        </div>
        <div className="flex gap-x-[2rem]">
          <div
            style={{
              background:
                "linear-gradient(47.36deg, #2DF1E6 12.24%, #3694B0 37.45%, #468DB3 39.38%, #6F79BA 44.93%, #8D6BBF 49.97%, #9F63C2 54.29%, #A660C3 57.37%)",
            }}
            className="p-0.5  rounded-lg"
          >
            <button className="py-[1rem] px-[2rem] font-[500] text-[1rem] bg-bgColor rounded-lg whitespace-nowrap">
              Learn More
            </button>
          </div>
          <button className=" px-[2rem] py-[1rem] font-[500] text-[1.1rem] bg-ascentColor rounded-lg whitespace-nowrap">
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareUrStream;
