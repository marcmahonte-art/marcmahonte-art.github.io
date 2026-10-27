import type { ProjectImage } from "@/data/projects";

type Props = {
  image: ProjectImage;
  sizes: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

export function ResponsiveImage({
  image,
  sizes,
  className = "",
  imgClassName = "",
  priority = false,
}: Props) {
  const largest = image.widths[image.widths.length - 1];
  const srcSet = image.widths
    .map((width) => `/images/${image.base}-${width}.webp ${width}w`)
    .join(", ");

  return (
    <img
      src={`/images/${image.base}-${largest}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={`${className} ${imgClassName}`.trim()}
    />
  );
}
