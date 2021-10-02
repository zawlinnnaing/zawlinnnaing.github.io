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
        {/* <Transition
          as={Fragment}
          show={isShowing}
          enter="transform transition-al duration-1000"
          enterFrom="opacity-0 top-0"
          enterTo="opacity-100 top-1/4"
          entered="top-1/4"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 top-1/4 "
          leaveTo="opacity-0 -top-1/4"
        >
          <div className="relative inline-block top-1/4"> */}
        <TransitionContainer>
          <MeCard />
        </TransitionContainer>
        {/* </div>
        </Transition> */}
        <div className="absolute bottom-0 left-0 ml-4">
          <p className="inline-block w-screen text-center subtitle">
            Scroll for more <ArrowDownIcon className="h-5 w-5 inline-block" />
          </p>
        </div>
      </div>
    </>
  );
}
