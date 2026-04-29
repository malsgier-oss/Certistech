import type { ReactNode } from "react";

type CardProps = {
  icon?: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  elevated?: boolean;
};

export default function Card({
  icon,
  title,
  description,
  children,
  className = "",
  elevated = false,
}: CardProps) {
  return (
    <div
      className={`
        card
        ${elevated ? "card--elevated" : ""}
        hover:border-accent-soft/60 hover:bg-surface-elevated
        transition-all duration-300
        ${className}
      `}
    >
      {icon && <div className="mb-4">{icon}</div>}
      {title && (
        <h3 className="text-h2 font-semibold text-text">{title}</h3>
      )}
      {description && (
        <p className="mt-3 text-body-sm text-text-muted leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
