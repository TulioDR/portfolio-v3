import useNavbarContext from "@/context/NavbarContext";
import BackArrowButton from "../BackArrowButton";
import MainContainer from "../MainContainer";

interface Props {
   onClick: () => void;
}

export default function TopBackButton({ onClick }: Props) {
   const { isWhite } = useNavbarContext();
   return (
      <div className="fixed w-full top-20 z-10 pointer-events-none">
         <MainContainer>
            <BackArrowButton onClick={onClick} isArrowWhite={isWhite} />
         </MainContainer>
      </div>
   );
}
