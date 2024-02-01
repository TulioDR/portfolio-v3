"use client";

import React from "react";
import NavLink from "./NavLink";
import TranslateButton from "./TranslateButton";

export default function Navbar() {
   return (
      <nav className="fixed top-0 left-0 w-full items-center flex h-20 px-20 z-30 pointer-events-none text-base font-normal">
         <div className="relative w-full flex justify-center">
            <div className="flex gap-2 divide-black pointer-events-auto p-2 bg-white shadow-xl rounded-lg">
               <div className="flex gap-1">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/work">Work</NavLink>
                  <NavLink href="/contact">Contact</NavLink>
               </div>
               <div className="h-full bg-black/80 w-[2px]" />

               <TranslateButton />
            </div>
         </div>
      </nav>
   );
}
