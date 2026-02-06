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
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-4 text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-br from-accent to-gold text-background font-medium hover:brightness-105 transition-all duration-200",
  secondary:
    "border border-[rgba(234,242,246,0.18)] bg-surface text-text hover:bg-surface-elevated transition-all duration-200",
  ghost:
    "bg-transparent text-text hover:text-accent transition-all duration-200",
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
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
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
