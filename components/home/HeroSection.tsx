// components/HeroSection.js

import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden h-auto text-white py-20 px-4 rounded sm:px-6 lg:px-8 bg-[#2e1065]">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight pt-12 md:pt-20">
              Welcome to The Well Food Hotel
            </h1>
            <p className="mt-4 text-xl sm:text-2xl">
              Your Ultimate Stay Experience in Jharkhand
            </p>
            <p className="mt-8 text-lg">
              We offer impeccable hospitality and a range of services to cater
              to all your needs. Whether you are traveling for business or
              pleasure, indulge in our world-class amenities and personalized
              service that will exceed your expectations.
            </p>
            <div className="py-4">
              <Button className="bg-purple-500 px-40 hover:bg-blue-600">
                Book Room
              </Button>
            </div>
          </div>

          <div className="grid grid-rows-1 gap-4">
            <div>
              <Image
                className="w-full h-full object-cover opacity-50"
                src="/hero-bg.jpg"
                alt="Hero Background"
                width={400}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
