"use client";

import React from "react";
import NavLink from "./NavLink";
import TranslateButton from "./TranslateButton";
import Link from "next/link";

interface Props {}

export default function Navbar({}: Props) {
   return <></>;
   return (
      <>
         <nav className="fixed top-0 left-0 w-full items-center flex h-20 px-20 z-20 pointer-events-none text-base font-normal">
            <div className="relative w-full flex justify-center ">
               <div className="w-full flex items-center justify-center text-sm">
                  <div className="absolute top-0 left-0 h-10 flex items-center gap-5 pointer-events-auto">
                     <Link href="/" className="text-white ">
                        Tulio Ruzo
                     </Link>
                  </div>
                  <div className="flex pointer-events-auto gap-10">
                     {/* <NavLink href="/">Home</NavLink> */}
                     <NavLink href="/about">About</NavLink>
                     <NavLink href="/work">Work</NavLink>
                     <NavLink href="/contact">Contact</NavLink>
                  </div>
                  <TranslateButton />
               </div>
            </div>
         </nav>
      </>
   );
}
