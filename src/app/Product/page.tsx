import React from "react";
import Header from "../Header/Header";
import Image from "next/image";
import Logo from "../../app/image/Logo.png";
import No from "../../app/image/No.png";
import { PiShoppingCartBold } from "react-icons/pi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Item1 from "../../app/image/Item1.png";
import Item2 from "../../app//image/Item2.png";
import Item3 from "../../app/image/Item3.png";
import Item4 from "../../app/image/Item4.png";
import Item11 from "../../app/image/Item11.png";
import Item22 from "../../app/image/Item22.png";
import Item33 from "../../app/image/Item33.png";
import Item44 from "../../app/image/Item44.png";
import Items1 from "../../app/image/Items1.png";
import Items4 from "../../app/image/Items4.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import instagram from "../../app/image/instagram.png";
import { FaFacebook, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const page = () => {
  return (
    <div>
      <Header />
      <div className="w-full sm:w-[1920px] h-[84px] px-6 sm:px-[300px] py-[20px] flex justify-center sm:gap-[850px] gap-[20px] bg-[#F0F2F3]">
        <Image
          src={Logo}
          height={40}
          width={166}
          alt="Logo"
          className="sm:ml-[80px] ml-[20px]"
        />
        <a
          href="/Cart"
          className="flex items-center sm:ml-[220px] sm:mr-[100px] w-[120px] h-[44px] px-[18px] py-[11px] gap-[12px] rounded-tl-[8px] bg-white relative z-10 ml-[10px] mr-[10px]"
        >
          <PiShoppingCartBold className="h-[44px] w-[44px]" />
          <p>Cart</p>
          <Image src={No} alt="No Items" height={30} width={30} />
        </a>
      </div>
      <div className="w-full sm:w-[1920px] h-[74px] px-6 sm:px-[300px] py-[14px] flex justify-around items-center">
        {/* Navigation Links */}
        <nav className="w-full sm:w-[339px] flex flex-wrap items-center text-base gap-0">
          <a
            href="#"
            className="mr-5 hover:text-slate-400 font-Inter text-[#007580]"
          >
            Home
          </a>
          <a
            href="/Cart"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            Shop
          </a>
          <a
            href="/Product"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            Product
          </a>
          <a
            href="/Singlepg"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            Pages
          </a>
          <a
            href="/About"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            About
          </a>
        </nav>
        {/* Contact Info */}
        <a href="/Contact" className="text-black ml-auto hover:text-slate-400">
          Contact: (808) 555-0111
        </a>
      </div>
      <div className="border-t border-gray-300 w-[1920px]"></div>

      <div className="sm:w-[1920px] w-[320px] h-[461px] absolute top-[200px] gap-0">
        <div className="sm:w-[1920px] w-[320px] h-[44px] px-[300px] flex justify-start items-start sm:flex-row flex-col sm:text-[32px] text-[25px] font-sans font-semibold whitespace-nowrap -ml-60 sm:ml-9">
          Featured Products
        </div>
        <div className="flex gap-4 mt-20 sm:mt-16 sm:flex-row flex-col sm:gap-8 justify-center">
          <div className="w-[330px] h-[415px] sm:w-[300px] sm:max-w-[300px]">
            {/* Content for the first product */}
            <Image src={Item1} alt="" height={312} width={330} />
            <p className="block text-sm text-[#007580] mt-4">
              Library Stool Chair
            </p>
            <p className="text-xs text-black">$20</p>
            <div className="w-[44px] h-[44px] absolute bg-[#007580] gap-0 rounded-sm -mt-8 ml-[280px] sm:ml-[200px]">
              <HiOutlineShoppingCart className="text-white" />
            </div>
          </div>
          <div className="w-[330px] h-[415px] sm:w-[300px] sm:max-w-[300px]">
            {/* Content for the second product */}
            <Image src={Item2} alt="" height={315} width={330} />
            <p className="block text-sm text-[#007580] mt-4">
              Library Stool Chair
            </p>
            <p className="text-xs text-black">$20</p>
            <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px] sm:ml-[200px]">
              <HiOutlineShoppingCart className="text-black" />
            </div>
          </div>
          <div className="w-[330px] h-[415px] sm:w-[300px] sm:max-w-[300px]">
            {/* Content for the third product */}
            <Image src={Item3} alt="" height={315} width={330} />
            <p className="block text-sm text-[#007580] mt-4">
              Library Stool Chair
            </p>
            <p className="text-xs text-black">$20</p>
            <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px] sm:ml-[200px]">
              <HiOutlineShoppingCart className="text-black" />
            </div>
          </div>
          <div className="w-[330px] h-[415px] sm:w-[300px] sm:max-w-[300px]">
            {/* Content for the fourth product */}
            <Image src={Item4} alt="" height={312} width={330} />
            <p className="block text-sm text-[#007580] mt-4">
              Library Stool Chair
            </p>
            <p className="text-xs text-black">$20</p>
            <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px] sm:ml-[200px]">
              <HiOutlineShoppingCart className="text-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1920px] h-[461px] absolute top-[700px] gap-0 hidden lg:block">
        <div className="w-full h-[44px] px-[570px] flex justify-start items-start text-[32px] font-sans font-semibold whitespace-nowrap">
          {/* Featured Products */}
          <div className="flex gap-4 mt-20 -ml-[250px]">
            <div className="w-[330px] h-[415px]">
              <Image src={Item11} alt="" height={312} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#007580] gap-0 rounded-sm -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-white" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              <Image src={Item22} alt="" height={315} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              <Image src={Item33} alt="" height={315} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              <Image src={Item44} alt="" height={312} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1920px] h-[461px] absolute top-[1200px] gap-0 hidden lg:block">
        <div className="w-full h-[44px] px-[570px] flex justify-start items-start text-[32px] font-sans font-semibold whitespace-nowrap">
          {/* Featured Products */}
          <div className="flex gap-4 mt-20 -ml-[250px]">
            <div className="w-[330px] h-[415px]">
              <Image src={Items1} alt="" height={312} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#007580] gap-0 rounded-sm -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-white" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              <Image src={Item2} alt="" height={315} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              <Image src={Item3} alt="" height={315} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              <Image src={Items4} alt="" height={312} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto absolute top-[1813px] p-8 sm:p-4 gap-[70px] sm:mt-[10px] mt-[200px]">
        <div className=" text-black text-center font-bold font-sans sm:text-4xl">
          Or Subscribe To The Newsletter
          <div className="flex flex-col sm:flex-row w-full items-center border-b mt-9 space-x-0 sm:space-x-4 sm:ml-0 sm:justify-center">
            <Input
              type="email"
              placeholder="Email Address"
              className="sm:w-72 w-full"
            />
            <Button
              className="bg-white text-black sm:ml-4 mt-4 sm:mt-0 sm:w-auto w-full"
              type="submit"
            >
              Submit
            </Button>
          </div>
          <div className="text-2xl mt-7 text-black text-center font-bold font-sans sm:text-4xl">
            Follow Products and Discounts on Instagram
            <Image
              src={instagram}
              alt=""
              height={200}
              width={1324}
              className="mt-16 sm:mx-auto w-full sm:w-[80%] md:w-[90%] lg:w-[1324px] h-auto"
            />
          </div>
        </div>

        <footer className="w-[320px] sm:w-[1920px] sm:mt-[20px] mt-[200px] bg-gray-100 text-gray-600 shadow-lg -ml-5 ">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-wrap md:text-left text-center items-start">
              {/* Logo and Social Links */}
              <div className="w-full md:w-1/4 mb-4">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                  <Image src={Logo} alt="Logo" height={40} width={168} />
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  Vivamus tristique odio sit amet velit semper, eu posuere
                  turpis interdum. Cras egestas purus
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
                    <a className="text-black hover:text-[#007580]">
                      Desk Chair
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-[#007580]">
                      Park Bench
                    </a>
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
    </div>
  );
};

export default page;
