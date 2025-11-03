interface QuantityCounterProps {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

export default function QuantityCounter({
  value,
  onChange,
  className,
}: QuantityCounterProps) {
  const increment = () => {
    onChange(value + 1);
  };

  const decrement = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  return (
    <div
      className={`bg-brand-light flex w-30 items-center justify-between p-4 ${className}`}
    >
      <button
        onClick={decrement}
        className="hover:text-brand-primary cursor-pointer text-[13px] font-bold opacity-25 transition-all hover:opacity-100"
      >
        -
      </button>
      <span className="mx-5 text-[13px] font-bold">{value}</span>
      <button
        onClick={increment}
        className="hover:text-brand-primary cursor-pointer text-[13px] font-bold opacity-25 transition-all hover:opacity-100"
      >
        +
      </button>
    </div>
  );
}
