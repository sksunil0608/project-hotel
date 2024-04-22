"use client";
import React, { useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
import { useRouter } from "next/navigation";
import { Contact, HomeIcon, MenuIcon, Store } from "lucide-react";
import { Button } from "../ui/button";

const MobileMenu = () => {
  const router = useRouter();
  return (
    <div>
      <Drawer direction="right">
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent className="fixed inset-x-0 bottom-0 mt-24 top-[-10] right-0  w-screen max-w-80 h-full">
          <div
            className="cursor-pointer flex gap-2 items-center"
            onClick={() => router.push("/about")}
          >
            <HomeIcon size={15} /> <span>Home</span>
          </div>
          <div
            className="cursor-pointer flex gap-2 items-center"
            onClick={() => router.push("/about")}
          >
            <Store size={15} /> <span>About</span>
          </div>
          <div
            className="cursor-pointer flex gap-2 items-center"
            onClick={() => router.push("contact")}
          >
            <Contact size={15} /> <span> Contact</span>
          </div>
          <div>
            <DrawerClose>
              <Button
                onClick={() => router.push("/sign-in")}
                variant="outline"
                size="sm"
              >
                Sign In
              </Button>
            </DrawerClose>
          </div>
          <div>
            <DrawerClose>
              <Button onClick={() => router.push("/sign-up")} size="sm">
                Signup
              </Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
