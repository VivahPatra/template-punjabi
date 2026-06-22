interface Props {
  size?: number
  flip?: { x?: boolean; y?: boolean }
  className?: string
}

export default function PichwaiCorner({ size = 80, flip, className = '' }: Props) {
  const scaleX = flip?.x ? -1 : 1
  const scaleY = flip?.y ? -1 : 1

  return (
    <svg
      viewBox="0 0 80 80"
      width={size}
      height={size}
      aria-hidden
      className={className}
      style={{ transform: `scale(${scaleX},${scaleY})` }}
    >
      {/* Peacock feather eye — top-left corner ornament */}
      {/* Main curved vine */}
      <path d="M4,76 Q4,4 76,4" fill="none" stroke="var(--color-accent)" strokeWidth="1.2" opacity="0.55" />
      <path d="M4,62 Q18,18 62,4" fill="none" stroke="var(--color-accent)" strokeWidth="0.6" opacity="0.3" />
      <path d="M4,48 Q28,28 48,4" fill="none" stroke="var(--color-accent3)" strokeWidth="0.4" opacity="0.2" />

      {/* Peacock feather eye at midpoint */}
      <ellipse cx="26" cy="26" rx="5" ry="8" fill="none" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.5" transform="rotate(-45 26 26)" />
      <ellipse cx="26" cy="26" rx="2.5" ry="4" fill="var(--color-accent3)" opacity="0.5" transform="rotate(-45 26 26)" />
      <circle cx="26" cy="26" r="1.5" fill="var(--color-accent)" opacity="0.8" />

      {/* Corner dot */}
      <circle cx="4" cy="76" r="3" fill="var(--color-accent)" opacity="0.65" />
      <circle cx="76" cy="4" r="2" fill="var(--color-accent2)" opacity="0.5" />

      {/* Small lotus bud near corner */}
      <ellipse cx="8" cy="68" rx="2" ry="3.5" fill="var(--color-accent)" opacity="0.4" />
      <ellipse cx="10" cy="66" rx="1.5" ry="3" fill="var(--color-accent3)" opacity="0.35" transform="rotate(15 10 66)" />
    </svg>
  )
}
