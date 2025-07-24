import { useEffect, useState } from "react";

const useResponsiveWindowSize = () => {
  const [windowSize, setWindowSize] = useState<number>(3);

  useEffect(() => {
    const updateWindowSize = () => {
      const size = window.innerWidth;

      if (size <= 425) {
        setWindowSize(1);
      } else if (size <= 768) {
        setWindowSize(2);
      } else {
        setWindowSize(3);
      }
    };

    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  return windowSize;
};

export default useResponsiveWindowSize;
