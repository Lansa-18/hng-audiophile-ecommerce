import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import RadioCheckedIcon from "@/components/icons/RadioCheckedIcon";
import RadioUncheckedIcon from "@/components/icons/RadioUncheckedIcon";
import RadioHoverIcon from "@/components/icons/RadioHoverIcon";
import { useState } from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function TextField({
  label,
  error,
  className,
  ...props
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label className="text-brand-black text-[12px] font-bold tracking-[-0.21px]">
          {label}
        </Label>
        {error && (
          <span className="text-brand-error text-[12px] font-medium">
            {error}
          </span>
        )}
      </div>
      <Input
        {...props}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        className={cn(
          "text-brand-black caret-brand-primary h-14 rounded-lg border px-6 text-[14px] font-bold transition-all duration-200",
          "placeholder:text-brand-black/40 placeholder:text-[14px] placeholder:font-bold",
          error
            ? "border-brand-error focus:border-brand-error border-2"
            : isFocused
              ? "border-brand-primary border-2"
              : "hover:border-brand-primary border-[#CFCFCF]",
          "focus:border-2 focus-visible:ring-0 focus-visible:ring-offset-0",
          className,
        )}
      />
    </div>
  );
}

interface RadioOptionProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export function RadioOption({ label, checked, onChange }: RadioOptionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onChange}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center gap-4 rounded-lg border px-6 py-4 w-full transition-colors ${
        checked ? "border-brand-primary" : "border-[#CFCFCF]"
      }`}
    >
      {checked ? (
        <RadioCheckedIcon width={20} height={20} />
      ) : isHovered ? (
        <RadioHoverIcon width={20} height={20} />
      ) : (
        <RadioUncheckedIcon width={20} height={20} />
      )}
      <span className="input-text text-brand-black">{label}</span>
    </button>
  );
}

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
}

export function NumberInput({ value, onChange }: NumberInputProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-brand-light flex w-[120px] items-center justify-between px-4 py-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        className={`button-text ${isHovered ? "text-brand-primary" : "text-brand-black/25"}`}
      >
        -
      </button>
      <span className="button-text text-brand-black">{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className={`button-text ${isHovered ? "text-brand-primary" : "text-brand-black/25"}`}
      >
        +
      </button>
    </div>
  );
}
