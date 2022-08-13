import { useRef, useState, useEffect } from "react";

export default function useScrollVisible() {
  const lastScrollTop = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  function onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop.current) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
  }

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isVisible;
}
