import React from "react";
import Image from "next/image";
import Logo from "../../app/image/Logo.png";
import { PiShoppingCartBold } from "react-icons/pi";
import No from "../../app/image/No.png";
import { Button } from "@/components/ui/button";
import product from "../../app/image/product.png";
import Logo1 from "../../app/image/Logo1.png";
import Logo2 from "../../app/image/Logo2.png";
import Logo3 from "../../app/image/Logo3.png";
import Logo4 from "../../app/image/Logo4.png";
import Logo5 from "../../app/image/Logo5.png";
import Logo6 from "../../app/image/Logo6.png";
import Logo7 from "../../app/image/Logo7.png";
import Item1 from "../../app/image/Item1.png";
import Item2 from "../../app//image/Item2.png";
import Item3 from "../../app/image/Item3.png";
import Item4 from "../../app/image/Item4.png";
import Item5 from "../../app/image/Item5.png";
import Item6 from "../../app/image/Item6.png";
import Item7 from "../../app/image/Item7.png";
import Item8 from "../../app/image/Item8.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Category from "../../app/image/Category.png";
import C2 from "../../app/image/C2.png";
import C3 from "../../app/image/C3.png";
import hotCategory from "../../app/image/hotCategory.png";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Hero = () => {
  return (
    <div>
      {/* Top Header */}
      <div className="w-full sm:w-[1920px] h-[84px] px-6 sm:px-[300px] py-[20px] flex justify-center sm:gap-[850px] gap-[20px] bg-[#F0F2F3]">
        <Image
          src={Logo}
          height={40}
          width={166}
          alt="Logo"
          className="sm:ml-[80px] ml-[20px]"
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

      <div className="w-full sm:w-[1920px] h-[74px] px-6 sm:px-[300px] py-[14px] flex justify-around items-center">
        {/* Navigation Links */}
        <nav className="w-full sm:w-[339px] flex flex-wrap items-center text-base gap-0">
          <a
            href="#"
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

      {/* Hero Section */}
      <div className="w-full sm:w-[1370px] h-[850px] gap-0 rounded-b-[48px] bg-[#F0F2F3] mx-4 sm:mx-72">
        <div className="w-[557px] h-[337px] absolute top-[400px] left-[20px] sm:left-[400px] gap-0 rounded-tl-[8px] mt-40">
          <p className="font-sans text-black">Welcome to chairy</p>
          <p className="sm:text-5xl text-3xl  font-sans font-bold mt-4">
            Best Furniture
          </p>
          <p className="sm:text-5xl text-2xl font-sans font-bold">
            Collection For Your Interior.
          </p>
          <Button
            className="w-[171px] h-[52px] top-[514px] left-[70px] mt-9 bg-[#029FAE] hover:bg-cyan-500 text-white font-sans"
            variant="outline"
          >
            Shop Now
          </Button>
        </div>
        {/* Main Product Image */}
        <div className="w-[200px] h-[584px] sm:w-[434px] sm:h-[584px] absolute top-[50px] sm:top-[115px] left-[100px] sm:left-[1200px] gap-0 mt-44">
          <Image src={product} alt="" height={584} width={434} />
        </div>
      </div>

      {/* this is companies logos */}
      <div className="flex justify-between sm:w-[1300px] h-[139px] lg:w-[1321px] absolute top-[1107px] left-[20px] sm:left-[300px] flex-wrap gap-0 ">
        <Image
          src={Logo1}
          alt=""
          height={87}
          width={85}
          className="h-[139px] -mt-4"
        />
        <Image
          src={Logo2}
          alt=""
          height={109}
          width={107}
          className="h-[139px] -mt-3"
        />
        <Image
          src={Logo3}
          alt=""
          height={139}
          width={135}
          className="h-[139px] -mt-4"
        />
        <Image
          src={Logo4}
          alt=""
          height={66}
          width={64}
          className="h-[64px] mt-4"
        />
        <Image
          src={Logo5}
          alt=""
          height={101}
          width={98}
          className="h-[101px]"
        />
        <Image
          src={Logo6}
          alt=""
          height={115}
          width={113}
          className="h-[115px] -mt-2"
        />
        <Image
          src={Logo7}
          alt=""
          height={87}
          width={84}
          className="h-[87px] mt-5"
        />
      </div>
      {/**this is features page  */}
      <div className="w-[320px] sm:w-[1920px] mt-96 sm:mt-44 px-4 lg:px-[285px] py-8">
        {/* Section Title */}
        <div className="w-full h-auto sm:h-auto text-[24px] sm:text-[32px] font-sans font-semibold mb-8">
          <h1 className="text-[24px] sm:text-[32px] font-sans font-semibold mt-14">
            Featured Products
          </h1>
        </div>

        {/* Products Container */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-8">
          {/* Product 1 */}
          <div className="w-[90%] sm:w-[312px] h-auto">
            <Image
              src={Item1}
              alt="Library Stool Chair"
              height={312}
              width={330}
              className="w-full h-auto"
            />
            <p className="block text-sm text-[#007580] mt-4">
              Library Stool Chair
            </p>
            <p className="text-xs text-black">$20</p>
            <div className="w-[44px] h-[44px] bg-[#007580] rounded-sm flex justify-center items-center text-white mt-2 ml-auto">
              <HiOutlineShoppingCart />
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-[90%] sm:w-[312px] h-auto">
            <Image
              src={Item2}
              alt="Library Stool Chair"
              height={315}
              width={330}
              className="w-full h-auto"
            />
            <p className="block text-sm text-[#007580] mt-4">
              Library Stool Chair
            </p>
            <p className="text-xs text-black">$20</p>
            <div className="w-[44px] h-[44px] bg-[#F0F2F3] rounded-sm flex justify-center items-center text-black mt-2 ml-auto">
              <HiOutlineShoppingCart />
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-[90%] sm:w-[312px] h-auto">
            <Image
              src={Item3}
              alt="Library Stool Chair"
              height={315}
              width={330}
              className="w-full h-auto"
            />
            <p className="block text-sm text-[#007580] mt-4">
              Library Stool Chair
            </p>
            <p className="text-xs text-black">$20</p>
            <div className="w-[44px] h-[44px] bg-[#F0F2F3] rounded-sm flex justify-center items-center text-black mt-2 ml-auto">
              <HiOutlineShoppingCart />
            </div>
          </div>

          {/* Product 4 */}
          <div className="w-[90%] sm:w-[312px] h-auto">
            <Image
              src={Item4}
              alt="Library Stool Chair"
              height={312}
              width={330}
              className="w-full h-auto"
            />
            <p className="block text-sm text-[#007580] mt-4">
              Library Stool Chair
            </p>
            <p className="text-xs text-black">$20</p>
            <div className="w-[44px] h-[44px] bg-[#F0F2F3] rounded-sm flex justify-center items-center text-black mt-2 ml-auto">
              <HiOutlineShoppingCart />
            </div>
          </div>
        </div>
      </div>

      {/**This Top categories */}
      <div className="w-[1920px] h-[495px] absolute top-[1270px] gap-0">
        <div className="w-[320px] sm:w-[1920px] h-[508px] sm:h-[508px]  absolute top-[1900px] sm:top-[600px] text-white  ">
          {" "}
          <h1 className="ml-10 text-[32px] font-sans font-semibold whitespace-nowrap text-black sm:ml-80">
            Top categories
          </h1>
          <div className="flex flex-col lg:flex-row gap-7 mt-9 lg:ml-80 items-center">
            <Image src={Category} alt="" height={424} width={424} />
            <Image src={C2} alt="" height={424} width={424} />
            <Image src={C3} alt="" height={424} width={424} />
          </div>
        </div>
      </div>
      {/*This is stylish chair */}
      {/* Stylish Chair Section */}
      {/* Stylish Chair Section */}
      <div className="w-[320px] h-[1800px] sm:w-[1920px] sm:h-[648px]  absolute top-[4300px] sm:top-[2604px] px-4 lg:px-0">
        <div className="w-full h-auto flex justify-center items-center">
          <Image
            src={hotCategory}
            alt="Stylish Chair"
            height={648}
            width={1320}
            className="rounded-md w-full max-w-[1320px] h-auto"
          />
        </div>
      </div>
      <div className="w-[320px] h-[1200px] sm:w-[1320px] sm:h-[919px] absolute top-[4500px] sm:top-[3425px]  sm:left-[350px] left-[50px] gap-0 ">
        <div className="w-full h-[44px] -ml-10 flex justify-start items-start  text-[32px] font-sans font-semibold whitespace-nowrap">
          <div>
            {" "}
            <h1 className="text-center">Our Products</h1>
          </div>{" "}
          <div className="flex flex-col sm:flex-row gap-4 mt-20 -ml-[200px]">
            <div className="w-[330px] h-[415px]">
              {/* Content for the first product */}
              <Image src={Item1} alt="" height={312} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#007580] gap-0 rounded-sm -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-white" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              {/* Content for the second product */}
              <Image src={Item2} alt="" height={315} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              <Image src={Item3} alt="" height={315} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              <Image src={Item4} alt="" height={312} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
          </div>
          {/**dosra  */}
          <div className="hidden sm:flex gap-4 mt-[500px] -ml-[1360px]">
            <div className="w-[330px] h-[415px]">
              {/* Content for the first product */}
              <Image src={Item5} alt="" height={312} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              {/* Content for the second product */}
              <Image src={Item6} alt="" height={315} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              <Image src={Item7} alt="" height={315} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              <Image src={Item8} alt="" height={312} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="relative">
                <Link
                  href="/Cart"
                  className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px]"
                >
                  <HiOutlineShoppingCart className="text-black" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 w-[1920px] mt-5"></div>
        </div>
      </div>
      <footer className="w-[320px] sm:w-[1920px] sm:mt-[2600px] mt-[3200px] bg-gray-100 text-gray-600 shadow-lg  ">
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

export default Hero;
