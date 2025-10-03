import { useState, useEffect } from "react";

const getBreakpoint = (width) => {
  if (width >= 1536) return "2xl";
  if (width >= 1280) return "xl";
  if (width >= 976) return "lg";
  if (width >= 768) return "md";
  if (width >= 480) return "sm";
  return "base";
};

export const useTailwindBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(() =>
    getBreakpoint(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => setBreakpoint(getBreakpoint(window.innerWidth));

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return breakpoint;
};
