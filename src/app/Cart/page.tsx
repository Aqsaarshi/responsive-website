import React from "react";
import Header from "../Header/Header";
import Link from "next/link";
import Image from "next/image";
import No from "../../app/image/No.png";
import Logo from "../../app/image/Logo.png";
import { PiShoppingCartBold } from "react-icons/pi";
import Item3 from "../../app/image/Item3.png";
import Items1 from "../../app/image/Items1.png";
import {
  FaFacebook,
  FaPinterest,
  FaRegHeart,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import frame from "../../app/image/frame.png";
import layout from "../../app/image/layout.png";
import { IoLogoInstagram } from "react-icons/io";

const page = () => {
  return (
    <div>
      <Header />
      {/* Header Section */}
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

      {/* Navigation Links */}
      <div className="w-full sm:w-[1920px] h-[74px] px-6 sm:px-[300px] py-[14px] flex justify-around items-center">
        {/* Navigation Links */}
        <nav className="w-full sm:w-[339px] flex flex-wrap items-center text-base gap-0">
          <Link
            href="/#"
            className="mr-5 hover:text-slate-400 font-Inter text-[#007580]"
          >
            Home
          </Link>
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
        <Link
          href="/Contact"
          className="text-black ml-auto hover:text-slate-400"
        >
          Contact: (808) 555-0111
        </Link>
      </div>

      <div className="border-t border-gray-300 w-full"></div>

      {/* Title */}
      <h1 className="text-xl font-sans mt-12 ml-8 sm:ml-80 ">Bag</h1>

      {/* Bag Section */}
      <div className="w-full max-w-[1920px] h-[632.89px] gap-6 sm:flex sm:flex-col flex-col items-center mt-12 ">
        {/* Item 2 (Moved up) */}
        <div className="w-full sm:w-[933px] bg-white rounded-lg shadow-lg mt-6 sm:mt-0 p-4 flex items-center flex-col justify-center">
          <div className="flex items-center w-full justify-between">
            <Image src={Item3} alt="Item" height={150} width={150} />
            <div className="ml-4 w-full flex flex-col justify-between">
              <Image src={layout} alt="Layout" height={105} width={800} />
              <div className="flex justify-end gap-4 mt-4">
                <FaRegHeart className="h-6 w-6 text-gray-500" />
                <GoTrash className="h-6 w-6 text-red-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Item 1 (Moved down) */}
        <div className="w-full sm:w-[963px] bg-white rounded-lg shadow-lg mt-6 sm:mt-0 p-4 flex items-center flex-col justify-center">
          <div className="flex items-center w-full justify-between">
            <Image src={Items1} alt="Item" height={150} width={150} />
            <div className="ml-4 w-full flex flex-col justify-around">
              <Image src={layout} alt="Layout" height={105} width={700} />
              <div className="flex justify-end gap-4 mt-4">
                <FaRegHeart className="h-6 w-6 text-gray-500" />
                <GoTrash className="h-6 w-6 text-red-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-[350.67px] sm:h-[295px] sm:left-[1500px] absolute flex flex-col justify-between">
          <span className="text-xl">Summary</span>

          {/* Subtotal Section */}
          <div className="mt-4 text-lg flex justify-between items-center">
            Subtotal: <span className="text-black ml-2">$198.00</span>
          </div>

          {/* Estimated Delivery & Handling Fee Section */}
          <div className="mt-2 text-lg flex justify-between items-center">
            Estimated Delivery & Handling Fee:{" "}
            <span className="text-black">Free</span>
          </div>

          {/* Border Section */}
          <div className="w-full h-[1px] mt-4 border-t border-gray-300"></div>

          {/* Total Section */}
          <div className="mt-4 text-xl flex justify-between items-center">
            Total: <span className="text-black ml-2">$198.00</span>
          </div>

          {/* Checkout Button */}
          <button className="w-[334.67px] h-[60px] mt-12 px-[100.8px] py-[18px] rounded-full bg-[#007580] text-white hover:bg-[#005f60] transition">
            Checkout
          </button>
        </div>

        {/* Summary (Now positioned to the right side) */}
      </div>
      <footer className="w-[320px] sm:w-[1920px] sm:mt-[185px] mt-[130px] bg-gray-100 text-gray-600 shadow-lg  ">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap md:text-left text-center items-start">
            {/* Logo and Social Links */}
            <div className="w-[320px] sm:w-[1920px] md:w-1/4 mb-4">
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
