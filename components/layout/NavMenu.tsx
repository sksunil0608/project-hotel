"use client";
import * as React from "react";
import { Home, Store, Contact, Hotel } from "lucide-react";
import { useRouter } from "next/navigation";
import { NavigationMenu } from "../ui/navigation-menu";

import {
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { Button } from "../ui/button";

export function NavMenu() {
  const router = useRouter();
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-3 text-white">
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => router.push("/")}
              >
                <Home size={20} /> <span>Home</span>
              </div>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => router.push("/rooms")}
              >
                <Hotel size={20} /> <span>Rooms</span>
              </div>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => router.push("/about")}
              >
                <Store size={20} /> <span className="">About</span>
              </div>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => router.push("/contact")}
              >
                <Contact size={20} /> <span>Contact</span>
              </div>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div onClick={() => router.push("/sign-in")}>
                <Button variant="outline" className="text-black">
                  Sign In
                </Button>
              </div>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div onClick={() => router.push("/sign-up")}>
                <Button>Signup</Button>
              </div>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
