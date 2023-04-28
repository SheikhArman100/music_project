import Image from "next/image";
import Link from "next/link";

import logo from "../../public/Logo.svg";
import navicon from "../../public/navbarIcon.svg";
import ButtonWrapper from "./ButtonWrapper";

const Navbar = () => {
   
  return (
    <div className="h-[3.75rem]  flex items-center justify-between">
      <Link href="/">

      <Image src={logo} className="h-[3.75rem] aspect-square" alt="logo" />
      </Link>
      <ul className="flex items-center justify-between gap-x-[2.5rem] md:gap-x-[1rem] text-lg lg:text-[1.1rem] md:text-[0.8rem]  leading-5 font-[400] sm:absolute sm:flex-col sm:top-32 sm:left-8  sm:gap-y-2 sm:opacity-60 cursor-pointer">
        <li className="">
          <Link href="" className="flex items-center gap-x-[0.5rem] text-ascentColor">
            Create
            {/* // eslint-disable-next-line @next/next/no-img-element */}
            <Image src={navicon} alt="navIcon"  className="h-[2rem] aspect-square"/>
          </Link>
        </li>
        <li>
          <Link href="">Stream</Link>
        </li>
        <li>
          <Link href="">Shop</Link>
        </li>
        <li>
          <Link href="">Pricing</Link>
        </li>
        <li>
          <Link href="">Join</Link>
        </li>
        <li>
          <Link href="">Contract</Link>
        </li>
      </ul>
      <ButtonWrapper/>
        
      
    </div>
  );
}


export default Navbar