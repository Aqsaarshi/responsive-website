import React from "react";
import Header from "../Header/Header";
import Image from "next/image";
import Logo from "../../app/image/Logo.png";
import { PiShoppingCartBold } from "react-icons/pi";
import No from "../../app/image/No.png";
import { FaFacebook, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Header />
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
      <div className="border-t border-gray-300 w-full"></div>

      <div className="w-full max-w-full-xl mx-auto mt-16">
        {/* Your content here */}
        <div>
          <h1 className="text-4xl md:text-5xl text-black text-center font-sans font-bold ">
            Questions Looks Here
          </h1>
          <p className="text-sm text-black text-center mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <section className="body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-2">
              {/* Question 1 */}
              <div className="p-2 lg:w-1/2 w-full">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      What types of chairs do you offer?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
              {/* Question 2 */}
              <div className="p-2 lg:w-1/2 w-full">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      How can we get in touch with you?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
              {/* Question 3 */}
              <div className="p-2 lg:w-1/2 w-full">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Do your chairs come with a warranty?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
              {/* Question 4 */}
              <div className="p-2 lg:w-1/2 w-full">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      What will be delivered? And When?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
              {/* Question 5 */}
              <div className="p-2 lg:w-1/2 w-full">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Can I try a chair before purchasing?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
              {/* Question 6 */}
              <div className="p-2 lg:w-1/2 w-full">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      How do I clean and maintain my Comforty chair?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-[320px] sm:w-[1920px] sm:mt-[20px] mt-[32px] bg-gray-100 text-gray-600 shadow-lg sm:-ml-40   ">
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

