import React from "react";
import Header from "../Header/Header";
import { PiShoppingCartBold } from "react-icons/pi";
import Logo from "../image/Logo.png";
import Image from "next/image";
import No from "../../app/image/No.png";
import Link from "next/link";
import Frame1 from "../../app/image/Frame1.png";
import Frame2 from "../../app/image/Frame2.png";
import Frame3 from "../../app/image/Frame3.png";
import Frame4 from "../../app/image/Frame4.png";
import chair from "../../app/image/chair.png";
import Large from "../../app/image/Large.png";
import Photo from "../../app/image/Photo.png";
import Parent from "../../app/image/Parent.png";
import { FaFacebook, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const page = () => {
  return (
    <div className="sm:overflow-x:hidden">
      <Header />
      {/* Header Section */}
      <div className="w-full  h-[84px] px-6 sm:px-[16px] py-[20px] flex justify-center sm:gap-[700px] gap-[20px] bg-[#F0F2F3]">
        <Image
          src={Logo}
          height={40}
          width={166}
          alt="Logo"
          className=" ml-[20px]"
        />
        <Link
          href="/Cart"
          className="flex items-center sm:ml-[220px] sm:mr-[100px] w-[120px] h-[44px] px-[18px] py-[11px] gap-[12px] rounded-tl-[8px] bg-white relative z-10 ml-[10px] mr-[10px]"
        >
          <PiShoppingCartBold className="h-[44px] w-[44px]" />
          <p>Cart</p>
          <Image src={No} alt="No Items" height={30} width={30} />
        </Link>
      </div>
      {/* Navigation Links */}
      <div className="w-full  h-[74px] px-6 sm:px-[120px] py-[14px] flex justify-between items-center ">
        {/* Navigation Links */}
        <nav className="w-full sm:w-[339px] flex flex-wrap items-center text-base ">
          <a
            href="/"
            className="mr-5 hover:text-slate-400 font-Inter text-[#007580]"
          >
            Home
          </a>
          <Link
            href="/Cart"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            Shop
          </Link>
          <Link
            href="/Product"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            Product
          </Link>
          <Link
            href="/Singlepg"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            Pages
          </Link>
          <Link
            href="/About"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            About
          </Link>
        </nav>
        {/* Contact Info */}
        <a href="/Contact" className="text-black ml-auto hover:text-slate-400">
          Contact: (808) 555-0111
        </a>
      </div>
      <div className="border-t border-gray-300  w-full"></div>
      <div className="w-full sm:w-[672px] h-auto sm:h-[478px] bg-[#007580] absolute top-[303px] left-[300px] sm:p-[64px_113px_54px_64px] p-6 gap-0 sm:gap-0 -ml-80  sm:-ml-48">
        <p className="text-white text-2xl sm:text-3xl font-sans font-bold text-center sm:text-left">
          About Us - Comforty
        </p>
        <p className="text-white font-sans mt-9 sm:mt-4 text-center sm:text-left">
          At Comforty, we believe that the right chair can transform your space
          and elevate your comfort. Specializing in ergonomic design, premium
          materials, and modern aesthetics, we craft chairs that seamlessly
          blend style with functionality.
        </p>
        <button className="inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#87b3b7] rounded text-lg mt-8 sm:mt-36 mx-auto sm:mx-0 sm:w-auto">
          View All Collection
        </button>
        <div className="w-full sm:w-[619px] h-auto sm:h-[478px] absolute top-[1px] left-[1001px] gap-0 sm:-ml-[300px] sm:top-0 sm:block hidden">
          <Image
            src={chair}
            alt=""
            height={478}
            width={619}
            className="sm:w-full w-auto"
          />
        </div>
      </div>

      {/**section */}
      <div className="sm:ml-[520px] ml-4 font-sans font-bold text-4xl sm:mt-[700px] mt-[600px]">
        What makes our Brand Different
      </div>
      <div className="absolute w-[1320px] h-[244px] top-[996px] left-[300px] sm:flex gap-10 -ml-[300px] sm:-ml-[180px]">
        <div className="w-[309.45px] h-[244px] flex-shrink-0 p-[48px_0px_0px_0px] bg-[#F9F9F9] px-4 ">
          <Image src={Frame1} alt="" height={148} width={213.45} />
        </div>
        <div className="w-[309.45px] h-[244px] flex-shrink-0 p-[48px_0px_0px_0px] bg-[#F9F9F9]">
          <Image src={Frame2} alt="" height={148} width={213.45} />
        </div>
        <div className="w-[309.45px] h-[244px] flex-shrink-0 p-[48px_0px_0px_0px] bg-[#F9F9F9]">
          <Image src={Frame3} alt="" height={148} width={213.45} />
        </div>
        <div className="w-[309.45px] h-[244px] flex-shrink-0 p-[48px_0px_0px_0px] bg-[#F9F9F9]">
          <Image src={Frame4} alt="" height={148} width={213.45} />
        </div>
      </div>
      {/**product  */}
      <div className="w-full sm:w-[1200px] lg:w-[1920px] h-auto sm:h-[461px] absolute top-[200px] gap-0 mt-[1800px] sm:mt-[1000px] md:mt-[1100px]">
        <div className="w-full h-[44px] px-[16px] sm:px-[300px] flex justify-start items-start text-[24px] sm:text-[32px] font-sans font-semibold whitespace-nowrap sm:-ml-40">
          Our Popular Products
          <div className="flex gap-0 sm:gap-4  mt-20 sm:mt-20 -ml-[100px] sm:-ml-[160px]">
            <div className="w-[100px]  sm:w-[630px] h-auto sm:h-[375px] -ml-40">
              {/* Content for the first product */}
              <Image src={Large} alt="" height={375} width={630} />
              <div>
                <p className="block text-sm text-black mt-4">
                  The Poplar suede sofa
                </p>
              </div>
              <p className="text-xs text-black">$99.00</p>
            </div>
            <div className="w-[100px] sm:w-[330px] h-auto sm:h-[415px]">
              {/* Content for the second product */}
              <Image src={Photo} alt="" height={315} width={330} />
              <p className="block text-sm text-black mt-4">The Dandy chair</p>
              <p className="text-xs text-black">$99.00</p>
            </div>
            <div className="w-[100px] sm:w-[330px] h-auto sm:h-[415px]">
              <Image src={Parent} alt="" height={315} width={330} />
              <p className="block text-sm text-black mt-4">The Dandy chair</p>
              <p className="text-xs text-black">$99.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 w-full sm:w-[1920px] sm:mt-[1200px] mt-[1500px]"></div>
      <footer className="w-[320px] sm:w-[1920px] sm:mt-[20px] mt-[00px] bg-gray-100 text-gray-600 shadow-lg sm:-ml-40  ">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap md:text-left text-center items-start">
            {/* Logo and Social Links */}
            <div className="w-full md:w-1/4 mb-4">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <Image src={Logo} alt="Logo" height={40} width={168} />
              </a>
              <p className="mt-4 text-sm text-gray-500">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis
                interdum. Cras egestas purus
                <div className="flex justify-start mt-2 space-x-2 text-gray-600">
                  <FaFacebook />
                  <FaTwitter />
                  <IoLogoInstagram />
                  <FaPinterest />
                  <FaYoutube />
                </div>
              </p>
            </div>
            {/* Categories */}
            <div className="w-full md:w-1/4 mb-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-4">
                <li>
                  <a className="text-black hover:text-gray-800">Sofa</a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">Armchair</a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">Wing Chair</a>
                </li>
                <li>
                  <a className="text-black hover:text-[#007580]">Desk Chair</a>
                </li>
                <li>
                  <a className="text-black hover:text-[#007580]">Park Bench</a>
                </li>
              </nav>
            </div>
            {/* Support */}
            <div className="w-full md:w-1/4 mb-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Support
              </h2>
              <nav className="list-none mb-4">
                <li>
                  <a className="text-black hover:text-gray-800">
                    Help & Support
                  </a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">Help</a>
                </li>
              </nav>
            </div>
            {/* Newsletter */}
            <div className="w-full md:w-1/4 mb-4">
              <h2 className="title-font font-medium text-[#9A9CAA] tracking-widest text-sm mb-3">
                NEWSLETTER
              </h2>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full bg-gray-100 rounded border border-gray-300 text-gray-700 py-1 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
                <button className="ml-2 text-white bg-[#029FAE] py-2 px-4 rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Bitters chicharrones fanny pack waistcoat green juice
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container px-5 py-4 mx-auto flex items-center justify-center">
            <p className="text-sm text-gray-500">
              © 2024 - Designed & Developed by Zakirsoft
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
