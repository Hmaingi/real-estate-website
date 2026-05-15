interface ImageWatermarkProps {
  className?: string;
}

export default function ImageWatermark({ className = "" }: ImageWatermarkProps) {
  return (
    <div
      className={`pointer-events-none select-none whitespace-nowrap text-white/10 ${className}`}
      style={{
        fontFamily:
          "'Pinyon Script', 'Vivaldi', 'Edwardian Script ITC', 'Bickham Script Pro', 'Monotype Corsiva', cursive",
        textShadow: "0 1px 12px rgba(0, 0, 0, 0.2)"
      }}
      aria-hidden="true"
    >
      Graceful Properties
    </div>
  );
}
