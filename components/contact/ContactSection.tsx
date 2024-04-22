import React from "react";
import {
  BookOpenIcon,
  ChevronRightIcon,
  Mail,
  MapIcon,
  MessagesSquareIcon,
  Phone,
  ThumbsUpIcon,
} from "lucide-react";
import { Settings2Icon, TabletSmartphoneIcon } from "lucide-react";
import Image from "next/image";
const ContactSection = () => {
  return (
    <>
      <div className="grid grid-rows-2 text-white text-center py-12 max-h-[40vh] h-auto rounded-lg bg-[#2e1065]">
        <h1 className="text-4xl  font-bold">Contact us Now</h1>
        <p className="mx-10 lg:mx-60 text-sm">
          Plan your perfect getaway or business trip with [Your Hotel Name]. Use
          our easy online booking system to secure your preferred dates and room
          type. Benefit from exclusive deals and packages when you book directly
          with us.
        </p>
      </div>
      {/* Icon Blocks */}
      <div className=" py-24 lg:py-12">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Get in touch with Us
            </h2>
            <p className="mt-3 text-muted-foreground">
              Have questions or need assistance? We are here to help! Feel free
              to reach out to us using the contact information below:
            </p>
            <Image
              className="w-[800px] h-[200px] object-cover opacity-50"
              src="/hero-bg.jpg"
              alt="Hero Background"
              width={400}
              height={100}
            />
            <p className="mt-5">
              <a
                className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 "
                href="#"
              >
                Need Further Assistance Contact us on our provided Details
                <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
              </a>
            </p>
          </div>
          {/* End Col */}
          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                <Phone className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Industry-leading documentation
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Our documentation and extensive Client libraries contain
                  everything a business needs to build a custom integration in a
                  fraction of the time.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border  bg-primary text-primary-foreground">
                <Mail className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Developer community support
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We actively contribute to open-source projects—giving back to
                  the community through development, patches, and sponsorships.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                <MapIcon className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Simple and affordable
                </h3>
                <p className="mt-1 text-muted-foreground">
                  From boarding passes to movie tickets, there&apos;s pretty
                  much nothing you can&apos;t do.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      <div className=" py-24 lg:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
          {/* Icon Block */}
          <div className="text-center">
            <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
              <TabletSmartphoneIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold ">Responsive</h3>
              <p className="mt-1 text-muted-foreground">
                Responsive, and mobile-first project on the web
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="text-center">
            <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
              <Settings2Icon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold ">Customizable</h3>
              <p className="mt-1 text-muted-foreground">
                Components are easily customized and extendable
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="text-center">
            <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
              <BookOpenIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold ">Documentation</h3>
              <p className="mt-1 text-muted-foreground">
                Every component and plugin is well documented
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="text-center">
            <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
              <MessagesSquareIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold ">24/7 Support</h3>
              <p className="mt-1 text-muted-foreground">
                Contact us 24 hours a day, 7 days a week
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
};

export default ContactSection;
