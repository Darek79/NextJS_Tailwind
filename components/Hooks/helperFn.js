import {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

export const CheckResize = () => {
  const [isMobile, setMobile] =
    useState < boolean > false;
  const clearRef = useRef(null);

  const resizeHandler = useCallback(async () => {
    const w = await promiseHandler();
    if (w < 600) {
      console.log(w);
      setMobile((p) => !p);
    } else {
      setMobile((p) => !p);
    }
  }, [promiseHandler, setMobile]);
  function promiseHandler() {
    clearTimeout(clearRef.current);
    return new Promise((res, rej) => {
      clearRef.current = setTimeout(() => {
        res(window.innerWidth);
      }, 1000);
    });
  }

  useEffect(() => {
    if (typeof window.innerWidth !== undefined) {
      window.addEventListener(
        "resize",
        resizeHandler
      );
    }

    () =>
      removeEventListener(
        "resize",
        resizeHandler
      );
  }, []);

  return isMobile;
};