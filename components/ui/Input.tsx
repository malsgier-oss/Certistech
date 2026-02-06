import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const baseClasses =
  "w-full rounded-xl border border-[rgba(234,242,246,0.12)] bg-transparent px-4 py-3 text-sm text-text placeholder:text-text-muted outline-none transition-colors duration-200 focus:border-accent focus:ring-1 focus:ring-accent/30";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-label font-medium text-text-muted">
          {label}
        </label>
      )}
      <input
        className={`${baseClasses} ${error ? "border-red-500" : ""} ${className}`}
        {...props}
      />
      {error && <p className="text-body-sm text-red-500">{error}</p>}
    </div>
  );
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

export function Textarea({
  label,
  error,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-label font-medium text-text-muted">
          {label}
        </label>
      )}
      <textarea
        className={`${baseClasses} min-h-[120px] ${error ? "border-red-500" : ""} ${className}`}
        {...props}
      />
      {error && <p className="text-body-sm text-red-500">{error}</p>}
    </div>
  );
}
