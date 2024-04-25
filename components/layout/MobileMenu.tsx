"use client";
import React, { useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useRouter } from "next/navigation";
import { Contact, HomeIcon, Hotel, MenuIcon, Store } from "lucide-react";
import { Button } from "../ui/button";

const MobileMenu = () => {
  const router = useRouter();
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent className="top-20 rounded-md">
          <div onClick={() => router.push("/")}>
            <SheetClose>
              <div className="flex my-4 gap-2 border py-2 rounded-lg border-purple-500 px-[165px] hover:bg-blue-300">
                <HomeIcon size={20} /> <span className="text-[18px]">Home</span>
              </div>
            </SheetClose>
          </div>

          <div className="" onClick={() => router.push("/rooms")}>
            <SheetClose>
              <div className="flex gap-2 my-4 border py-2 rounded-lg border-purple-500 px-[165px] hover:bg-blue-300">
                <Hotel size={20} />
                <span className="text-[18px]"> Rooms</span>
              </div>
            </SheetClose>
          </div>

          <div onClick={() => router.push("/about")}>
            <SheetClose>
              <div className="flex my-4 gap-2 border py-2 rounded-lg border-purple-500 px-[165px] hover:bg-blue-300">
                <Store size={20} /> <span className="text-[18px]">About</span>
              </div>
            </SheetClose>
          </div>
          <div className="" onClick={() => router.push("contact")}>
            <SheetClose>
              <div className="flex gap-2 my-4 border py-2 rounded-lg border-purple-500 px-[165px] hover:bg-blue-300">
                <Contact size={20} />
                <span className="text-[18px]"> Contact</span>
              </div>
            </SheetClose>
          </div>
          <div className="my-4">
            <SheetClose>
              <Button
                onClick={() => router.push("/sign-in")}
                variant="outline"
                size="sm"
                className="py-6 px-[185px]"
              >
                Sign In
              </Button>
            </SheetClose>
          </div>
          <div className="my-4">
            <SheetClose>
              <Button
                className="py-6 px-[185px]"
                onClick={() => router.push("/sign-up")}
                size="sm"
              >
                Signup
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
