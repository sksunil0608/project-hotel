"use client";
import React from "react";
import Container from "../Container";
import {
  Facebook,
  HomeIcon,
  Instagram,
  Linkedin,
  Mail,
  MailIcon,
  MapPinIcon,
  MessageSquareDot,
  Phone,
  PhoneIcon,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Chatbot from "../Chatbot";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="bg-gray-800 py-8 rounded-lg">
          <div className=" mx-auto px-4 md:px-8">
            <div className="flex flex-col  md:flex-wrap gap-8 justify-between">
              {/* Hotel Information Section */}
              <div className="bg-gray-800 py-8">
                <div className="container mx-auto px-4 md:px-8">
                  {/* Footer Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Hotel Information Section */}
                    <div className="text-center">
                      <div className="mb-6">
                        {/* Replace 'Logo' with your hotel logo */}
                        <Image
                          src="/wellfoodlogo.png"
                          alt="Logo"
                          className="h-30 w-30 mx-auto"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="text-white mb-4">
                        <h4 className="font-semibold text-2xl mb-1 text-purple-400">
                          Hotel Name
                        </h4>
                        <p className="text-sm">Your Ultimate Stay Experience</p>
                      </div>
                      <div className="text-white">
                        <div className="flex items-center justify-center pb-2">
                          <PhoneIcon className="h-5 w-5 mr-2" />
                          <p className="text-lg">+91 1234567890</p>
                        </div>
                        <div className="flex items-center justify-center pb-2">
                          <MailIcon className="h-5 w-5 mr-2" />
                          <p className="text-lg">abc@xyz.com</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <MapPinIcon className="h-5 w-5 mr-2" />
                          <p className="text-lg">123 Road, New Delhi</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="text-center">
                      <h4 className=" font-semibold text-2xl mb-4 text-purple-400">
                        Quick Links
                      </h4>
                      <div className="text-white">
                        <p className="pb-2 text-lg">Privacy Policy</p>
                        <p className="pb-2 text-lg">Refund Policy</p>
                        <p className="pb-2 text-lg">Terms and Conditions</p>
                      </div>
                    </div>

                    {/* Main Menu Section */}
                    <div className="text-center">
                      <h4 className=" font-semibold text-2xl mb-4 text-purple-400">
                        Main Menu
                      </h4>
                      <div className="text-white">
                        <p className="pb-2 text-lg">Home</p>
                        <p className="pb-2 text-lg">About</p>
                        <p className="pb-2 text-lg">Book Room Now</p>
                        <p className="pb-2 text-lg">My Booked Rooms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative  bottom-0 left-[96%] right-10 mr-4 mt-4  ">
                <Sheet key="right">
                  <SheetTrigger className="text-white border-2 p-4 mb-3 rounded-full">
                    <MessageSquareDot className="text-green-500" />
                  </SheetTrigger>
                  <SheetContent className="top-20">
                    <Chatbot />
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>

          <div className="flex mx-5 rounded-lg justify-between items-center h-16 bg-gray-200 text-white px-4">
            {/* Left side (Copyright text) */}
            <div className="flex items-center">
              <p className=" text-md text-blue-900">
                &copy; 2024 . All rights reserved.
              </p>
            </div>

            {/* Right side (Social icons) */}
            <div className="flex items-center space-x-4">
              <p className="text-md text-blue-900 font-bold">
                Developed by Blazync
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
