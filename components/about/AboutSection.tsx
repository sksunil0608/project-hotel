"use client";
import React from "react";
import {
  Building2Icon,
  ChevronRightIcon,
  ThumbsUpIcon,
  Users2Icon,
} from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <>
      <div className="grid grid-rows-2 text-white text-center py-12 max-h-[40vh] rounded-lg bg-[#2e1065]">
        <h1 className="text-4xl  font-bold">About Us</h1>
        <p className="mx-10 lg:mx-60 text-sm">
          Plan your perfect getaway or business trip with [Your Hotel Name]. Use
          our easy online booking system to secure your preferred dates and room
          type. Benefit from exclusive deals and packages when you book directly
          with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 mt-20">
        <div className="">
          {" "}
          <div className="lg:w-3/4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Get in touch with Us
            </h2>
            <p className="mt-3 text-muted-foreground">
              Have questions or need assistance? We are here to help! Feel free
              to reach out to us using the contact information below:
            </p>
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
        </div>
        <div>
          <Image
            className="w-full h-full object-cover opacity-50"
            src="/hero-bg.jpg"
            alt="Hero Background"
            width={200}
            height={450}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="py-24 lg:py-32">
            <div className="max-w-2xl mx-auto">
              {/* Grid */}
              <div className="grid gap-12">
                <div>
                  <h2 className="text-3xl font-bold lg:text-4xl">Our vision</h2>
                  <p className="mt-3 text-muted-foreground">
                    For as long as there have been cities, the public square has
                    been a fundamental part of the urban landscape - an open,
                    approachable space to meet and engage with friends and
                    neighbours. Space aims to capture this spirit of bringing
                    people together in an exciting, welcoming environment.
                  </p>
                </div>
                <div className="space-y-6 lg:space-y-10">
                  {/* Icon Block */}
                  <div className="flex">
                    <Building2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold">
                        High quality Co-Living spaces
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        Our fully furnished spaces are designed and
                        purpose-built with Co-Living in mind, featuring high-end
                        finishes and amenities that go far beyond traditional
                        apartment buildings.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className="flex">
                    <Users2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold">
                        Fostering vibrant communities
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        Our passion is bringing people together. Beyond creating
                        beautiful spaces, we provide shared experiences.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className="flex">
                    <ThumbsUpIcon className="flex-shrink-0 mt-2 h-6 w-6" />
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold">
                        Simple and all-inclusive
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        We worry about the details so that our residents
                        don&apos;t have to. From our online application process
                        to simple, all-inclusive billing we aim to make the
                        living experience as effortless as possible.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                </div>
              </div>
              {/* End Grid */}
            </div>
          </div>
        </div>
        <div>
          <div className="py-24 lg:py-32">
            <div className="max-w-2xl mx-auto">
              {/* Grid */}
              <div className="grid gap-12">
                <div>
                  <h2 className="text-3xl font-bold lg:text-4xl">
                    Our Mission
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    For as long as there have been cities, the public square has
                    been a fundamental part of the urban landscape - an open,
                    approachable space to meet and engage with friends and
                    neighbours. Space aims to capture this spirit of bringing
                    people together in an exciting, welcoming environment.
                  </p>
                </div>
                <div className="space-y-6 lg:space-y-10">
                  {/* Icon Block */}
                  <div className="flex">
                    <Building2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold">
                        High quality Co-Living spaces
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        Our fully furnished spaces are designed and
                        purpose-built with Co-Living in mind, featuring high-end
                        finishes and amenities that go far beyond traditional
                        apartment buildings.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className="flex">
                    <Users2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold">
                        Fostering vibrant communities
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        Our passion is bringing people together. Beyond creating
                        beautiful spaces, we provide shared experiences.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className="flex">
                    <ThumbsUpIcon className="flex-shrink-0 mt-2 h-6 w-6" />
                    <div className="ms-5 sm:ms-8">
                      <h3 className="text-base sm:text-lg font-semibold">
                        Simple and all-inclusive
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        We worry about the details so that our residents
                        don&apos;t have to. From our online application process
                        to simple, all-inclusive billing we aim to make the
                        living experience as effortless as possible.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                </div>
              </div>
              {/* End Grid */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
