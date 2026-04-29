import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const baseClasses =
  "w-full rounded-xl border border-[rgba(180,191,204,0.25)] bg-surface-alt ps-4 pe-4 py-3.5 min-h-[48px] text-base sm:text-sm text-text placeholder:text-text-subtle outline-none transition-colors duration-250 focus:border-accent focus:ring-1 focus:ring-accent/30 text-start";

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
        className={`${baseClasses} ${error ? "border-error/80 ring-1 ring-error/30" : ""} ${className}`}
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
        className={`${baseClasses} min-h-[120px] ${error ? "border-error/80 ring-1 ring-error/30" : ""} ${className}`}
        {...props}
      />
      {error && <p className="text-body-sm text-red-500">{error}</p>}
    </div>
  );
}
