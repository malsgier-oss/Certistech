import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  showDivider?: boolean;
  children: ReactNode;
  spacing?: "default" | "compact";
  className?: string;
};

export default function Section({
  id,
  title,
  showDivider = true,
  children,
  spacing = "default",
  className = "",
}: SectionProps) {
  const paddingClasses =
    spacing === "compact" ? "py-12 md:py-16" : "py-16 md:py-20";

  return (
    <section
      id={id}
      className={`max-w-7xl mx-auto px-6 md:px-8 ${paddingClasses} ${className}`}
    >
      {(title || showDivider) && (
        <div className="flex items-end justify-between gap-6 mb-8">
          {title && (
            <h2 className="text-h1 font-semibold text-text text-start shrink-0">{title}</h2>
          )}
          {showDivider && (
            <div className="h-px flex-1 bg-white/10 hidden md:block ms-6 min-w-0" />
          )}
        </div>
      )}
      {children}
    </section>
  );
}
