"use client";
import React from "react";
import Container from "../Container";
import { HomeIcon } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="mx-auto px-4">Hotelss</div>
        <h4 className="font-semibold text-[40px] py-6 ">Contact</h4>
        <div className="flex flex-wrap gap-16  items-center justify-between">
          <div className="flex-1">
            <p>123 Road</p>
            <div className="flex items-center py-4">
              <HomeIcon />
              <p className="ml-2">Code with Sunil</p>
            </div>
            <div className="flex items-center ">
              <HomeIcon />
              <p className="ml-2">Code with Sunil</p>
            </div>
            <div className="flex items-center py-4">
              <HomeIcon />
              <p className="ml-2">Code with Sunil</p>
            </div>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4"> Our Privacy</p>
            <p className="pb-4"> Our Privacy</p>
            <p className="pb-4"> Our Privacy</p>
            <p className="pb-4"> Our Privacy</p>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4"> Dining</p>
            <p className="pb-4"> Our Privacy</p>
            <p className="pb-4"> Our Privacy</p>
            <p className="pb-4"> Our Privacy</p>
          </div>
        </div>

        <div className="bg-tertiary-light h-10 mid:h-[70px] mt-16 w-full bottom-0 left-0"></div>
      </Container>
    </div>
  );
};

export default Footer;
