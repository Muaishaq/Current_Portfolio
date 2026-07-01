/**
 * ExcellenceMark — a custom mark signifying distinction.
 * A laurel wreath cradling a four-point star with an inscribed "M·I" axis.
 * Used in the site header and contact footer instead of a generic logo.
 */
export function ExcellenceMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Muhammed Ishaq — excellence mark"
      role="img"
    >
      {/* Outer ring — quiet honor */}
      <circle cx="32" cy="32" r="29" strokeWidth="0.6" opacity="0.35" />

      {/* Left laurel — fine curving leaves */}
      <g strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 44 C 10 36, 10 26, 14 18" />
        <path d="M14 40 C 17 39, 19 37, 19 34" />
        <path d="M13 34 C 16 33, 18 31, 18 28" />
        <path d="M13 28 C 16 27, 18 25, 18 22" />
        <path d="M15 22 C 17 21, 19 19, 19 17" />
      </g>

      {/* Right laurel — mirrored */}
      <g strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 44 C 54 36, 54 26, 50 18" />
        <path d="M50 40 C 47 39, 45 37, 45 34" />
        <path d="M51 34 C 48 33, 46 31, 46 28" />
        <path d="M51 28 C 48 27, 46 25, 46 22" />
        <path d="M49 22 C 47 21, 45 19, 45 17" />
      </g>

      {/* Four-point star — the apex of excellence */}
      <path
        d="M32 14 L34.6 29.4 L50 32 L34.6 34.6 L32 50 L29.4 34.6 L14 32 L29.4 29.4 Z"
        fill="currentColor"
        stroke="none"
      />

      {/* Center node */}
      <circle cx="32" cy="32" r="1.6" fill="#0a0a0a" stroke="none" />

      {/* Crowning tick at top of ring */}
      <path d="M30 6 L32 3 L34 6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}