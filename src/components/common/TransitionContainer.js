import { Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";

export default function TransitionContainer({ children }) {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
  }, [isShowing]);

  return (
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
      <div className="relative inline-block top-1/4">{children}</div>
    </Transition>
  );
}
