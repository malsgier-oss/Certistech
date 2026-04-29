import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  href?: string;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-xs min-h-[44px]",
  md: "px-5 py-3 text-sm min-h-[48px]",
  lg: "px-6 py-4 text-base min-h-[52px]",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "btn-primary font-semibold",
  secondary:
    "btn-secondary font-semibold",
  ghost: "bg-transparent text-text-muted hover:text-text transition-all duration-200",
};

export default function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  href,
  className = "",
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
