type Props = {
   isFilterOpen: boolean;
};

export default function FilterMessage({}: Props) {
   return (
      <div className="flex items-center h-full">
         <div className="aspect-square h-full grid place-content-center">
            <span className="material-icons">sort</span>
         </div>
         {/* <div className="min-w-max text-sm">
            {isFilterOpen ? <div>Drag me!</div> : <div>Open Filter</div>}
         </div> */}
         <div className="aspect-square"></div>
      </div>
   );
}
