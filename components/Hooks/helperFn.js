import {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

export const CheckResize = (smallerThen) => {
  const [isMobile, setMobile] = useState(false);
  const clearRef = useRef(null);

  const resizeHandler = useCallback(async () => {
    const w = await promiseHandler();
    if (w < smallerThen) {
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
      window.addEventListener("resize", resizeHandler);
    }

    () => removeEventListener("resize", resizeHandler);
  }, []);

  return isMobile;
};

export const IsInViewport = ({
  elementRef,
  options = {threshold: 1},
}) => {
  const [visible, setVisible] = useState(false);

  const cb = useCallback(
    ([entry]) => {
      setVisible(() => entry.isIntersecting);
    },
    [visible, setVisible]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(cb, options);

    if (elementRef.current !== undefined) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return visible;
};
