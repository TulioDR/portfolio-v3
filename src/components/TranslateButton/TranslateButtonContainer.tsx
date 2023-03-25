import MainContainer from "../MainContainer";

type Props = {
   children: React.ReactNode;
};

export default function TranslateButtonContainer({ children }: Props) {
   return (
      <div className="fixed bottom-7 w-full pointer-events-none z-10">
         <MainContainer>
            <div className="w-full flex justify-end">{children}</div>
         </MainContainer>
      </div>
   );
}
