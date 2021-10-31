import React, { useEffect, useState } from "react";
import TransitionContainer from "../common/TransitionContainer";
import MeCard from "./MeCard";

export default function HomeContainer() {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
  }, [isShowing]);

  return (
    <>
      <div className="h-screen-90 text-center">
        <TransitionContainer>
          <MeCard />
        </TransitionContainer>
      </div>
    </>
  );
}
