"use client";
import React, { useEffect, useState } from "react";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/nextjs";
import Container from "../Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ModeToggle } from "../theme-toggle";
import { NavMenu } from "./NavMenu";
import { UserMenu } from "./UserMenu";
import MobileMenu from "./MobileMenu";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "../ui/button";

const NavBar = () => {
  const router = useRouter();
  const isMobileMenu = useMediaQuery("(max-width:768px)");

  return (
    <div className="z-[90] sticky top-0 border-2 border-indigo-500/50 ... bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... ">
      <Container>
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-2"
            onClick={() => router.push("/")}
          >
            <Image src="/logo.svg" alt="logo" width="30" height="30" />
            <div>Hotel Sunil</div>
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <ModeToggle />
            </div>
            {isMobileMenu ? (
              <>
                <SignedIn>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push("/hotel/new")}
                  >
                    Dashboard
                  </Button>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <MobileMenu />
                </SignedOut>
              </>
            ) : (
              <>
                <SignedIn>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push("/dashboard")}
                  >
                    Dashboard
                  </Button>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <NavMenu />
                </SignedOut>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
