'use client'
import Link from 'next/link';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,

    FaYoutube,
} from "react-icons/fa";



const FooterIcons = () => {
  return (
    <div className="flex items-center justify-between">
      <p>©️ 2023 AnyDemo, Inc . Privacy . Terms . Sitemap</p>
      <ul className="flex items-center gap-x-[0.5rem] ">
        <li className="h-[2rem] aspect-square grid place-items-center bg-[#1976D2] rounded-md">
          <Link href="">
            <FaFacebook />
          </Link>
        </li>
        <li className="h-[2rem] aspect-square grid place-items-center bg-[#E60000;] rounded-md">
          <Link href="">
            <FaYoutube />
          </Link>
        </li>
        <li
          style={{
            background:
              "linear-gradient(49.12deg, #FFDD55 6.62%, #FF543E 50.06%, #C837AB 93.5%)",
          }}
          className="h-[2rem] aspect-square grid place-items-center  rounded-md"
        >
          <Link href="">
            <FaInstagram />
          </Link>
        </li>
        <li className="h-[2rem] aspect-square grid place-items-center bg-[#03A9F4] rounded-md">
          <Link href="">
            <FaTwitter className="" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default FooterIcons