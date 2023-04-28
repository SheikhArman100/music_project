import Image from "next/image";
import CreateMusic1 from "../../public/CreateMusic1.svg";
import CreateMusic2 from "../../public/CreateMusic2.svg";
import CreateMusic3 from "../../public/CreateMusic3.svg";

const CreateMusic = () => {
  return (
    <div className="mt-[4rem] flex flex-col gap-y-[3.5rem]">
      <div className="text-center flex flex-col gap-y-[1.5rem]">
        <h1 className="font-[700] text-[2.5rem] leading-[2.9rem] sm:text-[2rem]">
          Create Music
        </h1>
        <p className="text-[#ffffffb2] font-[400] text-[1.1rem] leading-[1.7rem]">
          Upload your song idea, license any voice in our catalog and let a{" "}
          <br />
          professional perform your next hit.
        </p>
      </div>
      <div className="flex justify-between sm:flex-wrap sm:justify-center sm:gap-y-12 md:gap-x-2">
        <div
          style={{
            background:
              "linear-gradient(30deg, #2DF1E6 12.24%, #3694B0 37.45%, #468DB3 39.38%, #6F79BA 44.93%, #8D6BBF 49.97%, #9F63C2 54.29%, #A660C3 57.37%)",
          }}
          className="p-0.5  rounded-lg"
        >
          <div className="relative h-[10.25rem] w-[21.25rem] lg:w-[16rem] md:w-[12rem] sm:w-[10rem] sm:h-[8rem] bg-bgColor grid place-items-center font-[400] text-[1.75rem] sm:text-[1.25rem] leading-[2rem] rounded-lg">
            <div className="absolute bg-bgColor h-[60%] -top-[30%] left-[35%] md:left-[25%] sm:left-[25%] aspect-square rounded-full grid place-items-center">
              <Image
                src={CreateMusic1}
                alt="createmusic1"
                className="h-[3rem] w-[4.4rem]"
              />
            </div>
            Upload Song
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(30deg, #2DF1E6 12.24%, #3694B0 37.45%, #468DB3 39.38%, #6F79BA 44.93%, #8D6BBF 49.97%, #9F63C2 54.29%, #A660C3 57.37%)",
          }}
          className="p-0.5  rounded-lg"
        >
          <div className="relative h-[10.25rem] w-[21.25rem] lg:w-[16rem] md:w-[12rem] sm:w-[10rem] sm:h-[8rem] bg-bgColor grid place-items-center font-[400] text-[1.75rem] sm:text-[1.25rem] leading-[2rem] rounded-lg">
            <div className="absolute bg-bgColor h-[60%] -top-[30%] left-[35%] md:left-[25%]  aspect-square rounded-full grid place-items-center">
              <Image
                src={CreateMusic2}
                alt="createmusic2"
                className="h-[3rem] w-[4.4rem]"
              />
            </div>
            License Voice
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(30deg, #2DF1E6 12.24%, #3694B0 37.45%, #468DB3 39.38%, #6F79BA 44.93%, #8D6BBF 49.97%, #9F63C2 54.29%, #A660C3 57.37%)",
          }}
          className="p-0.5  rounded-lg"
        >
          <div className="relative h-[10.25rem] w-[21.25rem] lg:w-[16rem] md:w-[12rem] sm:w-[10rem] sm:h-[8rem] bg-bgColor  grid place-items-center font-[400] text-[1.75rem] sm:text-[1.25rem] leading-[2rem] rounded-lg">
            <div className="absolute bg-bgColor h-[60%] -top-[30%] left-[35%] md:left-[25%]  aspect-square rounded-full grid place-items-center">
              <Image
                src={CreateMusic3}
                alt="createmusic3"
                className="h-[3rem] w-[4.4rem]"
              />
            </div>
            Create Music
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMusic