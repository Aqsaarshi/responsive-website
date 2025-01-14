import React from "react";
import Image from "next/image";
import check from "../../app/image/check.png";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" sm:w-[320px] md:w-[720px] lg:w-[1920px] ">
      <div className="flex justify-center items-center gap-[20px] sm:gap-[880px] px-4 sm:px-[880px] lg:px-16 bg-[#272343] h-[45px] ">
        {/* Shipping Message */}
        <div className="flex items-center gap-2 sm:-ml-[380px]">
          <Image src={check} alt="Check Icon" height={16} width={16} />
          <p className="font-sans text-[13px] leading-[14.3px] text-white">
            Free shipping on all orders over $50
          </p>
        </div>

        {/* Accordion and Links */}
        <div className="flex items-center gap-4 text-white">
          {/* Language Selector */}
          <Accordion type="single" collapsible className="relative text-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger>Eng</AccordionTrigger>
              <AccordionContent>Urdu</AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* FAQ and Help Links */}
          <div className="flex items-center gap-2 text-sm">
            <Link href="/Faq" className="hover:underline">
              FAQs
            </Link>
            <AiOutlineExclamationCircle />
            <Link href="/contact" className="hover:underline">
              Need Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
