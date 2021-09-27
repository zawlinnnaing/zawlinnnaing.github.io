import { Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import UnderConstructionCard from "../common/UnderConstructionCard";

export default function HomeContainer() {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
  }, [isShowing]);

  return (
    <>
      <div className="h-screen text-center">
        <Transition
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
          <div className="relative inline-block top-1/4">
            <UnderConstructionCard bodyText="This site is under construction please check back soon later. 😉" />
          </div>
        </Transition>
      </div>
    </>
  );
}
