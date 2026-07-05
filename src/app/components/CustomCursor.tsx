import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';

type TargetRect = { x: number; y: number; width: number; height: number; radius: number };

const RING_SPRING = { stiffness: 420, damping: 34, mass: 0.5 };

function readRadius(el: Element, width: number, height: number): number {
  const parsed = parseFloat(getComputedStyle(el).borderRadius);
  if (Number.isNaN(parsed)) return 10;
  // Tailwind's rounded-full resolves to a huge px value; clamp to a true pill.
  return Math.min(parsed, Math.min(width, height) / 2);
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [target, setTarget] = useState<TargetRect | null>(null);
  const rafRef = useRef<number | null>(null);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const ringW = useMotionValue(36);
  const ringH = useMotionValue(36);
  const ringRadius = useMotionValue(18);

  const springX = useSpring(ringX, RING_SPRING);
  const springY = useSpring(ringY, RING_SPRING);
  const springW = useSpring(ringW, RING_SPRING);
  const springH = useSpring(ringH, RING_SPRING);
  const springRadius = useSpring(ringRadius, RING_SPRING);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine) and (hover: hover)");
    setEnabled(query.matches);
    const handleChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let mouseX = -100;
    let mouseY = -100;
    let hoveredEl: Element | null = null;

    const applyRingPosition = () => {
      if (hoveredEl) {
        const rect = hoveredEl.getBoundingClientRect();
        const pad = 8;
        ringX.set(rect.left + rect.width / 2);
        ringY.set(rect.top + rect.height / 2);
        ringW.set(rect.width + pad * 2);
        ringH.set(rect.height + pad * 2);
        ringRadius.set(readRadius(hoveredEl, rect.width + pad * 2, rect.height + pad * 2));
      } else {
        ringX.set(mouseX);
        ringY.set(mouseY);
        ringW.set(36);
        ringH.set(36);
        ringRadius.set(18);
      }
    };

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dotX.set(mouseX);
      dotY.set(mouseY);
      if (!hoveredEl) {
        ringX.set(mouseX);
        ringY.set(mouseY);
      }
      setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const match = (e.target as Element)?.closest?.(INTERACTIVE_SELECTOR) ?? null;
      hoveredEl = match;
      setTarget(match ? { x: 0, y: 0, width: 0, height: 0, radius: 0 } : null);
      applyRingPosition();
    };

    const handleScroll = () => {
      if (hoveredEl) applyRingPosition();
    };

    const handleLeaveWindow = () => setVisible(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    document.documentElement.addEventListener("mouseleave", handleLeaveWindow);
    document.body.classList.add("rn-cursor-none");

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("scroll", handleScroll, true);
      document.documentElement.removeEventListener("mouseleave", handleLeaveWindow);
      document.body.classList.remove("rn-cursor-none");
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled, dotX, dotY, ringX, ringY, ringW, ringH, ringRadius]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.25s ease",
      }}
    >
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "#178B4C",
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ opacity: target ? 0 : 1, scale: target ? 0.4 : 1 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          border: "1.5px solid #178B4C",
          x: springX,
          y: springY,
          width: springW,
          height: springH,
          borderRadius: springRadius,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          backgroundColor: target ? "rgba(23, 139, 76, 0.07)" : "rgba(23, 139, 76, 0.05)",
          borderWidth: target ? 1.5 : 1.5,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
