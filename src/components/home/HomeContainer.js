import { ArrowDownIcon } from "@heroicons/react/outline";
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
        {/* <div className="absolute bottom-0 left-0 ml-4">
          <p className="inline-block w-screen text-center subtitle">
            Scroll for more <ArrowDownIcon className="h-5 w-5 inline-block" />
          </p>
        </div> */}
      </div>
    </>
  );
}
