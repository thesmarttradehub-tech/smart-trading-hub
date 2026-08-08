import Image from "next/image";

export function CandlestickChart({
  className,
  count = 16,
  seed = 7,
}: {
  className?: string;
  count?: number;
  seed?: number;
}) {
  const width = 640;
  const height = 400;
  const baseline = height - 30;
  const step = (width - 60) / count;

  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  const candles = Array.from({ length: count }).map((_, i) => {
    const trendY = baseline - (i / (count - 1)) * (height - 110);
    const centerY = trendY + (rand() - 0.5) * 34;
    const bodyHeight = 22 + rand() * 34;
    const wickExtra = 12 + rand() * 20;
    const up = rand() > 0.32;
    const x = 30 + i * step;
    return {
      x,
      top: centerY - bodyHeight / 2,
      bottom: centerY + bodyHeight / 2,
      wickTop: centerY - bodyHeight / 2 - wickExtra,
      wickBottom: centerY + bodyHeight / 2 + wickExtra,
      up,
    };
  });

  const first = candles[0];
  const last = candles[candles.length - 1];
  const midX = (first.x + last.x) / 2;
  const arrowStartY = first.bottom + 6;
  const arrowEndY = last.top - 22;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="candlestick-arrow" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#9d7336" />
          <stop offset="100%" stopColor="#f5d68f" />
        </linearGradient>
        <marker
          id="candlestick-arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="6"
          refY="5"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill="#f5d68f" />
        </marker>
      </defs>

      {candles.map((c, i) => (
        <g key={i}>
          <line
            x1={c.x}
            x2={c.x}
            y1={c.wickTop}
            y2={c.wickBottom}
            stroke={c.up ? "#e3bf7a" : "#5b6a63"}
            strokeWidth={2}
          />
          <rect
            x={c.x - 8}
            y={c.top}
            width={16}
            height={Math.max(c.bottom - c.top, 4)}
            fill={c.up ? "#e3bf7a" : "#3f4a45"}
            rx={2}
          />
        </g>
      ))}

      <path
        d={`M ${first.x} ${arrowStartY} Q ${midX} ${Math.min(arrowStartY, arrowEndY) - 30} ${last.x} ${arrowEndY}`}
        stroke="url(#candlestick-arrow)"
        strokeWidth={4}
        fill="none"
        strokeLinecap="round"
        markerEnd="url(#candlestick-arrowhead)"
      />
    </svg>
  );
}

export function MarketDashboard() {
  return (
    <div className="hero-dashboard hero-chart-panel">
      <div className="hero-dashboard-glow" />
      <div className="hero-chart-ticker">
        <span>NIFTY 50</span>
        <span className="hero-chart-ticker-up">+1.84%</span>
      </div>
      <CandlestickChart className="hero-chart-svg" />
    </div>
  );
}

export function SupportDashboard() {
  return (
    <div className="hero-dashboard">
      <div className="hero-dashboard-glow" />
      <Image
        src="/Service desk.png"
        alt="Smart Traders support desk with monitor, headphones, and support team ready to assist"
        width={1340}
        height={900}
        style={{ width: "100%", height: "auto", display: "block" }}
        priority
      />
    </div>
  );
}

export function BullShowcase() {
  return (
    <div className="bull-card">
      <Image
        src="/Run Bull.png"
        alt="Golden bull charging forward with a rising market chart and city skyline at night"
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 1100px) 100vw, 50vw"
      />
    </div>
  );
}
