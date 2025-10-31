import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RadioCheckedIcon from "@/components/icons/RadioCheckedIcon";
import RadioUncheckedIcon from "@/components/icons/RadioUncheckedIcon";
import RadioHoverIcon from "@/components/icons/RadioHoverIcon";
import { useState } from "react";

interface TextFieldProps {
  label: string;
  placeholder: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function TextField({ label, placeholder, error, value, onChange }: TextFieldProps) {
  const [inputValue, setInputValue] = useState(value || "");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Label className="label-text text-brand-black">{label}</Label>
        {error && <span className="text-xs font-normal text-brand-error">{error}</span>}
      </div>
      <Input
        value={inputValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className={`input-text px-6 py-4 rounded-lg border ${
          error
            ? "border-brand-error border-2"
            : isFocused || inputValue
            ? "border-brand-primary border-2"
            : "border-[#CFCFCF]"
        } focus-visible:ring-0 focus-visible:ring-offset-0`}
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
      className={`flex items-center gap-4 px-6 py-4 rounded-lg border transition-colors ${
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
      className="flex items-center justify-between bg-brand-light px-4 py-3 w-[120px]"
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