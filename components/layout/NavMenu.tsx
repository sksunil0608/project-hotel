"use client";
import * as React from "react";
import { Home, Store, Contact } from "lucide-react";
import { useRouter } from "next/navigation";
import { NavigationMenu } from "../ui/navigation-menu";

import {
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";

export function NavMenu() {
  const router = useRouter();
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-3">
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => router.push("/")}
              >
                <Home size={15} /> <span>Home</span>
              </div>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => router.push("/rooms")}
              >
                <Home size={15} /> <span>Rooms</span>
              </div>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => router.push("/about")}
              >
                <Store size={15} /> <span>About</span>
              </div>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => router.push("/contact")}
              >
                <Contact size={15} /> <span>Contact</span>
              </div>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div onClick={() => router.push("/sign-in")}>Sign In</div>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div onClick={() => router.push("/sign-up")}>Signup</div>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
