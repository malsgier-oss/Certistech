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
        rounded-2xl border border-[rgba(234,242,246,0.12)] bg-surface p-6 backdrop-blur-sm
        transition-all duration-200
        ${elevated ? "hover:bg-surface-elevated hover:border-[rgba(234,242,246,0.18)]" : ""}
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
