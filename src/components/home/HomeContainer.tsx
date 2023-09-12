import React from "react";
import TransitionContainer from "../common/TransitionContainer";
import MeCard from "./MeCard";

export default function HomeContainer() {
  return (
    <>
      <div className="text-center h-screen-4by6">
        <TransitionContainer>
          <MeCard />
        </TransitionContainer>
      </div>
    </>
  );
}
