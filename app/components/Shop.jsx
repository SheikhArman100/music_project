import Image from 'next/image';
import profile1 from "../../public/ShopProfile1.jpg";
import image1 from "../../public/shop1.jpg";
import image2 from "../../public/shop2.jpg";
import image3 from "../../public/shop3.jpg";
const Shop = () => {
  return (
    <div className="mt-[5rem]">
      <div className="text-center flex flex-col gap-y-[1.5rem] ">
        <h1 className="font-[700] text-[2.5rem] leading-[2.9rem]">Shop</h1>
        <p className="font-[400] text-[1.1rem] leading-[1.7rem] text-[#ffffffb2]">
          Upload your song idea, license any voice in our catalog and let a{" "}
          <br className="sm:hidden" />
          professional perform your next hit.
        </p>
      </div>
      <div className="flex justify-between sm:flex-wrap sm:justify-center gap-x-[2rem] sm:gap-y-[2rem] mt-[2rem]  md:gap-x-[1rem]">
        <div
          style={{
            background:
              "linear-gradient(179.92deg, #3B343F 0.07%, #1D1F27 82.76%)",
            boxShadow: "2px 2px 25px rgba(0, 0, 0, 0.05)",
          }}
          className="h-[25rem] w-[23.75rem] rounded-lg sm:h-[20rem] sm:w-[15rem] "
        >
          <Image
            src={image1}
            alt="shop1"
            placeholder="blur"
            className="h-[60%] md:h-[55%] rounded-md"
          />
          <div className=" p-[1rem] sm:py-[0.2rem] sm:px-[0.3rem]">
            <h3 className="font-[500] md:font-[600]  text-[1.5rem] leading-[1.9rem] lg:text-[1.2rem] md:text-[1rem] sm:text-[0.8rem]">
              Holly Herndon & Jlin (feat.
              <br className="md:hidden" /> Spawn)–Godmother
            </h3>
            <div className="flex items-center gap-x-[0.5rem] mt-[0.8rem] md:mt-[0.4rem]">
              <Image src={profile1} alt="profile1" className="rounded-full" />
              <div>
                <h4 className="font-[500] text-[1rem] ">John Williams</h4>
                <div className="flex items-center gap-x-[1rem]">
                  <p className="font-[400] text-[1rem] leading-4">Mar23</p>
                  <div className="flex items-center gap-x-[0.3rem]">
                    <div className="h-1 w-1 rounded-full bg-white" />
                    <p className="font-[400]">Jazz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            background:
              "linear-gradient(179.92deg, #3B343F 0.07%, #1D1F27 82.76%)",
            boxShadow: "2px 2px 25px rgba(0, 0, 0, 0.05)",
          }}
          className="h-[25rem] w-[23.75rem] rounded-lg sm:h-[20rem] sm:w-[15rem] "
        >
          <Image
            src={image2}
            alt="shop1"
            placeholder="blur"
            className="h-[60%] w-full rounded-md md:h-[55%]"
          />
          <div className=" p-[1rem] sm:py-[0.2rem] sm:px-[0.3rem]">
            <h3 className="font-[500] md:font-[600]  text-[1.5rem] leading-[1.9rem] lg:text-[1.2rem] md:text-[1rem] sm:text-[0.8rem]">
              Holly Herndon & Jlin (feat.
              <br className="md:hidden" /> Spawn) – Godmother
            </h3>
            <div className="flex items-center gap-x-[0.5rem] mt-[0.8rem] md:mt-[0.4rem]">
              <Image src={profile1} alt="profile1" className="rounded-full" />
              <div>
                <h4 className="font-[500] text-[1rem] ">John Williams</h4>
                <div className="flex items-center gap-x-[1rem]">
                  <p className="font-[400] text-[1rem] leading-4">Mar23</p>
                  <div className="flex items-center gap-x-[0.3rem]">
                    <div className="h-1 w-1 rounded-full bg-white" />
                    <p className="font-[400]">Jazz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            background:
              "linear-gradient(179.92deg, #3B343F 0.07%, #1D1F27 82.76%)",
            boxShadow: "2px 2px 25px rgba(0, 0, 0, 0.05)",
          }}
          className="h-[25rem] w-[23.75rem] rounded-lg sm:h-[20rem] sm:w-[15rem] "
        >
          <Image
            src={image3}
            alt="shop1"
            placeholder="blur"
            className="h-[60%] rounded-md md:h-[55%]"
          />
          <div className=" p-[1rem] sm:py-[0.2rem] sm:px-[0.3rem]">
            <h3 className="font-[500] md:font-[600] text-[1.5rem] leading-[1.9rem] lg:text-[1.2rem] md:text-[1rem]  sm:whitespace-normal">
              Holly Herndon & Jlin (feat.
              <br className="md:hidden" /> Spawn) – Godmother
            </h3>
            <div className="flex items-center gap-x-[0.5rem] mt-[0.8rem] md:mt-[0.4rem]">
              <Image
                src={profile1}
                alt="profile1"
                className="rounded-full"
                placeholder="blur"
              />
              <div>
                <h4 className="font-[500] text-[1rem] ">John Williams</h4>
                <div className="flex items-center gap-x-[1rem]">
                  <p className="font-[400] text-[1rem] leading-4">Mar23</p>
                  <div className="flex items-center gap-x-[0.3rem]">
                    <div className="h-1 w-1 rounded-full bg-white" />
                    <p className="font-[400]">Jazz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          style={{
            background:
              "linear-gradient(47.36deg, #2DF1E6 12.24%, #3694B0 37.45%, #468DB3 39.38%, #6F79BA 44.93%, #8D6BBF 49.97%, #9F63C2 54.29%, #A660C3 57.37%)",
          }}
          className="py-[1rem] px-[1.5rem] text-[1.1rem] font-[500] leading-[1.3rem] mt-[3rem] rounded-lg "
        >
          Try Now
        </button>
      </div>
    </div>
  );
}

export default Shop