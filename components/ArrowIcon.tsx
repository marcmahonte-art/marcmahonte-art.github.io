type Props = {
  className?: string;
  direction?: "up-right" | "right" | "down" | "left";
};

const rotations = {
  "up-right": "rotate(0deg)",
  right: "rotate(45deg)",
  down: "rotate(135deg)",
  left: "rotate(225deg)",
} as const;

export function ArrowIcon({ className, direction = "up-right" }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ transform: rotations[direction] }}
      width={14}
      height={14}
    >
      <path
        d="M4 12L12 4M5.2 4H12v6.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
