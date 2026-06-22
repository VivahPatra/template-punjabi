interface Props {
  fromColor: string
  toColor: string
}

export default function LotusWaveDivider({ fromColor, toColor }: Props) {
  return (
    <div style={{ height: 56, background: fromColor, position: 'relative' }}>
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}
        aria-hidden
      >
        {/* Wave fill */}
        <path
          d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56Z"
          fill={toColor}
        />
        {/* Gold decorative line along wave */}
        <path
          d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28"
          fill="none"
          stroke="rgba(200,146,42,0.2)"
          strokeWidth="1"
        />
        {/* Diamond nodes at wave peaks/troughs */}
        <rect x="357" y="50" width="6" height="6" fill="rgba(200,146,42,0.4)" transform="rotate(45 360 53)" />
        <rect x="717" y="24" width="6" height="6" fill="rgba(200,146,42,0.5)" transform="rotate(45 720 27)" />
        <rect x="1077" y="50" width="6" height="6" fill="rgba(200,146,42,0.4)" transform="rotate(45 1080 53)" />
      </svg>
    </div>
  )
}
