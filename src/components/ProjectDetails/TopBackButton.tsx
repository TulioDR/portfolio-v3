import BackArrowButton from "../BackArrowButton";
import MainContainer from "../MainContainer";

interface Props {
   onClick: () => void;
}

export default function TopBackButton({ onClick }: Props) {
   // const { isWhiteArrow } = useNavbarContext();

   return (
      <div className="fixed w-full top-20 z-10 pointer-events-none">
         <MainContainer>
            <BackArrowButton onClick={onClick} isArrowWhite={true} />
         </MainContainer>
      </div>
   );
}
