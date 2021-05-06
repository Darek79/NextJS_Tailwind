import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

function IsOnScreen(options) {
  const [isVisible, setVisible] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log(entry, "inter");
      setVisible(() => entry.isIntersecting);
    }, options);

    if (nodeRef.current !== null) {
      console.log("OBSERVE", nodeRef.current);
      observer.observe(nodeRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return [isVisible, nodeRef];
}

export default IsOnScreen;
