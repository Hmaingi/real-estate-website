interface BrandWordmarkProps {
  className?: string;
  uppercase?: boolean;
}

export default function BrandWordmark({ className = "", uppercase = false }: BrandWordmarkProps) {
  return (
    <span
      className={`font-normal leading-none text-[#0D1F2D] whitespace-nowrap ${className}`}
      style={{
        fontFamily:
          "'Pinyon Script', 'Vivaldi', 'Edwardian Script ITC', 'Bickham Script Pro', 'Monotype Corsiva', cursive",
        letterSpacing: "0.005em",
        fontWeight: 400,
        textShadow:
          "0 0 1px rgba(13, 31, 45, 0.18), 0 0 4px rgba(16, 185, 129, 0.24), 0 0 10px rgba(16, 185, 129, 0.12)"
      }}
    >
      {uppercase ? "GRACEFUL PROPERTIES" : "Graceful Properties"}
    </span>
  );
}

