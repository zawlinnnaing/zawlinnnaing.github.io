import { Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import UnderConstruction from "../../images/under-construction.svg";

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
          leaveTo="opacity-0 -top-1/4 "
        >
          <div className="relative inline-block">
            <figure className="dark:bg-gray-100 bg-gray-800 rounded p-8 shadow-md text-center max-h-250px">
              <img
                className="w-80 h-auto rounded-full mx-auto -top-32 relative bg-white p-4 dark:bg-gray-900"
                src={UnderConstruction}
                alt="Under construction"
              />
              <p className="dark:text-black text-lg font-bold text-white mt-8 -top-32 relative">
                This site is under construction. Please check back again soon
                😉.
              </p>
            </figure>
          </div>
        </Transition>
      </div>
    </>
  );
}
