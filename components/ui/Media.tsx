import Image from "next/image";
import { images, type ImageKey } from "@/lib/media";
import styles from "./Media.module.css";

type MediaProps = {
  image: ImageKey;
  /** `sizes` attribute for responsive loading. */
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Scale the image in from a slightly zoomed state when it enters the viewport. */
  reveal?: boolean;
  /** Parallax strength (percentage of height travelled while scrolling past). */
  parallax?: number;
  /** Treat as decorative — hide from assistive tech. */
  decorative?: boolean;
};

/**
 * A cropped, masked photograph. The wrapper owns the shape (via className);
 * the image always fills it with object-fit: cover at its focal point.
 */
export function Media({ image, sizes, className, priority, reveal = true, parallax, decorative }: MediaProps) {
  const asset = images[image];
  return (
    <div
      className={[styles.media, className].filter(Boolean).join(" ")}
      data-reveal-image={reveal && !priority ? "" : undefined}
    >
      <Image
        src={asset.src}
        alt={decorative ? "" : asset.alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={85}
        className={parallax ? styles.parallaxImage : styles.image}
        style={{ objectPosition: asset.position }}
        data-parallax={parallax}
      />
    </div>
  );
}
