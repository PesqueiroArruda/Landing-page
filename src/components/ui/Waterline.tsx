interface WaterlineProps {
  className?: string;
  animated?: boolean;
}

const WAVE_PATH =
  "M0 32c60-22 120-22 180 0s120 22 180 0 120-22 180 0 120 22 180 0 120-22 180 0 120 22 180 0 120-22 180 0 120 22 180 0 120-22 180 0v32H0Z";

function WaveShape({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
      className={className}
    >
      <path d={WAVE_PATH} fill="currentColor" />
    </svg>
  );
}

/** Horizonte de água: marca a transição entre uma seção e a "superfície do lago" da próxima. */
export default function Waterline({ className = "", animated = false }: WaterlineProps) {
  if (!animated) {
    return <WaveShape className={className} />;
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="animate-wave-drift flex h-full w-[200%]">
        <WaveShape className="h-full w-1/2 shrink-0" />
        <WaveShape className="h-full w-1/2 shrink-0" />
      </div>
    </div>
  );
}
