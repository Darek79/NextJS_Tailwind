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
    console.log(w, "W");
    if (w < smallerThen) {
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

export const initWidth = (breakpoint) => {
  console.log(typeof window);
  if (window) {
    return window.innerWidth > breakpoint;
  }
};
export const IsMobile = () => {
  var match = window.matchMedia || window.msMatchMedia;
  if (match) {
    var mq = match("(pointer:coarse)");
    if (!mq.matches) {
      return false;
    }
  }
  return true;
};
