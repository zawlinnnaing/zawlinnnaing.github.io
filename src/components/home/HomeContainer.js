import { Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";

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
          enterTo="opacity-100 top-1/3"
          entered="top-1/3"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 top-1/3 "
          leaveTo="opacity-0 -top-1/3 "
        >
          <div className="relative inline-block">
            <p className="text-6xl">Hello world</p>
          </div>
        </Transition>
      </div>
    </>
  );
}
