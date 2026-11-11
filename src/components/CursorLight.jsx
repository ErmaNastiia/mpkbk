import { useEffect, useRef } from "react";

// A soft light that slowly drifts toward the cursor instead of snapping to
// it. Two glows move at slightly different speeds/sizes for a bit of depth.
// Pure CSS-variable + rAF loop, no extra libraries.
export default function CursorLight() {
  const layerRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos1 = { ...target };
    const pos2 = { ...target };
    let raf = null;

    const handlePointerMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      target.x = touch.clientX;
      target.y = touch.clientY;
    };

    const lerp = (a, b, n) => a + (b - a) * n;

    const tick = () => {
      // Slower, heavier glow (main light).
      pos1.x = lerp(pos1.x, target.x, 0.045);
      pos1.y = lerp(pos1.y, target.y, 0.045);
      // Slightly quicker, dimmer trailing glow for depth.
      pos2.x = lerp(pos2.x, target.x, 0.09);
      pos2.y = lerp(pos2.y, target.y, 0.09);

      layer.style.setProperty("--x1", `${pos1.x}px`);
      layer.style.setProperty("--y1", `${pos1.y}px`);
      layer.style.setProperty("--x2", `${pos2.x}px`);
      layer.style.setProperty("--y2", `${pos2.y}px`);

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="cursor-light" ref={layerRef} aria-hidden="true" />;
}
