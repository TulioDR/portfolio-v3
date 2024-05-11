"use client";

import React from "react";
import NavLink from "./NavLink";
import TranslateButton from "./TranslateButton";

interface Props {}

export default function Navbar({}: Props) {
   return (
      <nav className="fixed h-20 2xl:h-40 bottom-0 flex items-center left-0 w-full justify-center z-50">
         <div className="flex items-stretch h-16 2xl:h-20 p-2 gap-2 text-sm bg-black rounded-xl">
            <div className="flex items-stretch">
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
