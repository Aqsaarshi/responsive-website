import React from "react";
import Image from "next/image";
import Logo from "../../app/image/Logo.png";
import { FaFacebook, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
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
                <a className="text-black hover:text-gray-800">Help & Support</a>
              </li>
              <li>
                <a className="text-black hover:text-gray-800">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="text-black hover:text-gray-800">Privacy Policy</a>
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
  );
};

export default Footer;
