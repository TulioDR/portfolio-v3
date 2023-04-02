import Hexagon from "./Hexagon";

export default function ContactInfo() {
   return (
      <div className="flex justify-center items-center">
         <div>
            <div className="flex space-x-4">
               <Hexagon>Contact me at</Hexagon>
               <Hexagon>gmail</Hexagon>
               <Hexagon>
                  <div>Send a message</div>
                  <span className="material-icons !rotate-90 lg:!rotate-0">
                     arrow_right_alt
                  </span>
               </Hexagon>
            </div>
            <div className="flex justify-center space-x-4 -translate-y-4">
               <Hexagon>linkedin</Hexagon>
               <Hexagon>github</Hexagon>
            </div>
         </div>
      </div>
   );
}
