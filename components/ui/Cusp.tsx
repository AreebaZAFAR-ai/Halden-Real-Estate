import styles from "./Cusp.module.css";

type CuspProps = {
  /**
   * down  — flat edge on top, tip pointing down (a notch hanging from a boundary)
   * up    — flat edge on the bottom, tip pointing up (rising from a boundary)
   * hourglass — both, tip to tip
   */
  shape?: "down" | "up" | "hourglass";
  className?: string;
};

// Two quarter-circles of radius 100 meeting at a point: the negative space
// left between two rounded corners that face each other across a grid line.
const DOWN = "M0 0H200A100 100 0 0 0 100 100A100 100 0 0 0 0 0Z";
const UP = "M0 100H200A100 100 0 0 1 100 0A100 100 0 0 1 0 100Z";
const UP_LOW = "M0 200H200A100 100 0 0 1 100 100A100 100 0 0 1 0 200Z";

/**
 * The signature seam of the site. Colour comes from `currentColor`,
 * so set `color` to the neighbouring section's background.
 */
export function Cusp({ shape = "down", className }: CuspProps) {
  const isHourglass = shape === "hourglass";
  return (
    <svg
      className={[styles.cusp, isHourglass ? styles.tall : "", className].filter(Boolean).join(" ")}
      viewBox={isHourglass ? "0 0 200 200" : "0 0 200 100"}
      aria-hidden="true"
      focusable="false"
    >
      {shape === "down" && <path d={DOWN} />}
      {shape === "up" && <path d={UP} />}
      {isHourglass && (
        <>
          <path d={DOWN} />
          <path d={UP_LOW} />
        </>
      )}
    </svg>
  );
}
