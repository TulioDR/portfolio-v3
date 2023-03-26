import Hexagon from "./Hexagon";

export default function ContactInfo() {
   return (
      <div className="flex justify-center items-center">
         <div>
            <div className="flex space-x-4">
               <Hexagon>Contact me at</Hexagon>
               <Hexagon>gmail</Hexagon>
               <Hexagon>Check my projects</Hexagon>
            </div>
            <div className="flex justify-center space-x-4 -translate-y-4">
               <Hexagon>linkedin</Hexagon>
               <Hexagon>github</Hexagon>
            </div>
         </div>
      </div>
   );
}
