"use client";

import React, { useState } from "react";
import NavLink from "./NavLink";
import TranslateButton from "./TranslateButton";
// import Menu from "./Menu";

interface Props {}

export default function Navbar({}: Props) {
   const [showMenu, setShowMenu] = useState<boolean>(false);
   const openMenu = () => setShowMenu(true);
   // const closeMenu = () => setShowMenu(false);

   return (
      <nav className="fixed h-20 pointer-events-none 2xl:h-40 bottom-0 flex items-center left-0 w-full justify-center z-50">
         <div
            className={`flex pointer-events-auto items-stretch h-16 2xl:h-20 p-2 gap-2 text-sm bg-black duration-300 rounded-b-xl relative ${
               showMenu ? "rounded-t-none" : "rounded-t-xl"
            }`}
         >
            <div className="flex items-stretch">
               <NavLink href="/" openMenu={openMenu}>
                  Home
               </NavLink>
               {/* <NavLink href="/about" openMenu={openMenu}>
                  About
               </NavLink> */}
               <NavLink href="/work" openMenu={openMenu}>
                  Work
               </NavLink>
               <NavLink href="/contact" openMenu={openMenu}>
                  Contact
               </NavLink>
            </div>
            <TranslateButton />
         </div>
      </nav>
   );
}
