import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
   children: React.ReactNode;
};

export default function ModalPortal({ children }: Props) {
   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) return <></>;
   return createPortal(children, document.querySelector("body")!);
}
