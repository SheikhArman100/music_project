import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <div className="mt-[4rem] flex flex-col justify-between gap-y-[1.5rem]">
      <div className="flex justify-between sm:flex-wrap sm:justify-center sm:gap-y-4  md:gap-x-6">
        <div>
          <h4 className="font-[500] text-[1.75rem] leading-[2.5rem] md:text-[1.4rem]">
            Product
          </h4>
          <ul className="text-[1.1rem] font-[400] leading-[1.3rem] mt-[1rem] flex flex-col gap-y-[0.5rem]">
            <li>Features</li>
            <li>Integrations</li>
            <li>Pricing plans</li>
            <li>Product updates</li>
          </ul>
        </div>
        <div>
          <h4 className="font-[500] text-[1.75rem] leading-[2.5rem] md:text-[1.4rem]">
            Resources
          </h4>
          <ul className="text-[1.1rem] font-[400] leading-[1.3rem] mt-[1rem] flex flex-col gap-y-[0.5rem]">
            <li>Blog</li>
            <li>User guides</li>
            <li>Community</li>
            <li>Developers</li>
            <li>Legal</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-[500] text-[1.75rem] leading-[2.5rem] md:text-[1.4rem]">
            Company
          </h4>
          <ul className="text-[1.1rem] font-[400] leading-[1.3rem] mt-[1rem] flex flex-col gap-y-[0.5rem]">
            <li>About us</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="text-center">
          <h4 className="font-[500] text-[1.75rem] leading-[2.5rem] md:text-[1.4rem]">
            Subscribe to our newsletter
          </h4>
          <div className="flex mt-[1rem] ">
            <div
              style={{
                background:
                  "linear-gradient(15deg, #2DF1E6 12.24%, #3694B0 37.45%, #468DB3 39.38%, #6F79BA 44.93%, #8D6BBF 49.97%, #9F63C2 54.29%, #A660C3 57.37%)",
              }}
              className="py-0.5 pl-0.5 rounded-lg rounded-r-none"
            >
              <input className="bg-bgColor w-full h-full  rounded-l-lg px-2 font-[400] text-[1rem]" />
            </div>
            <button className="p-[0.8rem] md:p-[0.6rem] bg-ascentColor rounded-r-lg whitespace-nowrap">
              Subscribe now
            </button>
          </div>
        </div>
      </div>
      <div className="h-[0.05rem] w-full bg-[#FFFFFD66]" />
      <FooterIcons />
    </div>
  );
}

export default Footer