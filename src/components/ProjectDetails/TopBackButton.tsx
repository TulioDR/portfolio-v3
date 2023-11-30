import BackArrowButton from "../BackArrowButton";
import MainContainer from "../MainContainer";

interface Props {
   onClick: () => void;
   black?: true;
}

export default function TopBackButton({ onClick, black }: Props) {
   return (
      <div className="fixed w-full top-20 z-10 pointer-events-none">
         <MainContainer>
            <BackArrowButton onClick={onClick} black={black} />
         </MainContainer>
      </div>
   );
}
