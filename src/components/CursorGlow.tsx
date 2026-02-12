import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const springConfig = { damping: 30, stiffness: 250, mass: 0.6 };
const slowSpring = { damping: 40, stiffness: 120, mass: 0.8 };

const CursorGlow = () => {
  const [visible, setVisible] = useState(false);
  const [isPointerCoarse, setIsPointerCoarse] = useState(false);
  const [clicking, setClicking] = useState(false);

  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const trailX = useSpring(0, slowSpring);
  const trailY = useSpring(0, slowSpring);

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    setIsPointerCoarse(media.matches);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);

      if (!visible) setVisible(true);
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [visible, x, y, trailX, trailY]);

  if (isPointerCoarse) return null;

  return (
    <>
      {/* Outer Smooth Trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-screen"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: 350,
          height: 350,
          background:
            "radial-gradient(circle, hsl(175 80% 50% / 0.12) 0%, transparent 70%)",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          scale: clicking ? 0.9 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Inner Core */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-screen"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: 10,
          height: 10,
          background: "hsl(175 80% 50%)",
          boxShadow:
            "0 0 25px 6px hsl(175 80% 50% / 0.6), 0 0 80px 20px hsl(175 80% 50% / 0.25)",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          scale: clicking ? 0.7 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};

export default CursorGlow;
