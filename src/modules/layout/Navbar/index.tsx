"use client";

import React from "react";
import NavLink from "./NavLink";
import TranslateButton from "./TranslateButton";

export default function Navbar() {
   return (
      <nav className="fixed top-0 left-0 w-full items-center flex pt-5 px-20 z-30 pointer-events-none text-base font-normal">
         <div className="relative w-full h-full flex justify-center">
            <div className="flex gap-1 pointer-events-auto p-1 bg-white rounded-full shadow-xl">
               <NavLink href="/">Home</NavLink>
               <NavLink href="/about">About</NavLink>
               <NavLink href="/work">Work</NavLink>
               <NavLink href="/contact">Contact</NavLink>
            </div>
            <TranslateButton />
         </div>
      </nav>
   );
}
