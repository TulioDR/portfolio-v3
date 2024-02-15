"use client";

import React from "react";
import NavLink from "./NavLink";
import TranslateButton from "./TranslateButton";

export default function Navbar() {
   return (
      <nav className="fixed top-0 left-0 w-full items-center flex h-20 px-20 z-30 pointer-events-none text-base font-normal">
         <div className="relative w-full flex justify-center">
            <div className="w-full flex items-center text-lg justify-between ">
               <div className="flex pointer-events-auto gap-10">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/work">Work</NavLink>
                  <NavLink href="/contact">Contact</NavLink>
               </div>
               <TranslateButton />
            </div>
         </div>
      </nav>
   );
}
