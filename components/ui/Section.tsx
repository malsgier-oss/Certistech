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
    spacing === "compact" ? "py-12 md:py-14" : "py-16 md:py-24";
  const revealIndex = ((id?.length ?? 0) + (title ? title.length : 0)) % 6;

  return (
    <section
      id={id}
      className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-8 reveal-on-scroll ${spacing === "compact" ? "" : "md:px-8"} ${className}`}
      style={{
        ["--reveal-index" as `--${string}`]: `${revealIndex}` as string,
      }}
    >
      {(title || showDivider) && (
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 md:mb-10">
          {title && (
            <div>
              <p className="status-pill mb-3 inline-flex">{(id ?? "").replace(/-/g, " ")} </p>
              <h2 className="section-title-line text-h1 md:text-[2.25rem] font-semibold text-text text-start min-w-0 break-words">
                {title}
              </h2>
            </div>
          )}
          {showDivider && (
            <div className="h-px flex-1 bg-gradient-to-r from-[rgba(180,191,204,0.22)] to-transparent hidden md:block sm:ms-6 min-w-0" />
          )}
        </div>
      )}
      {children}
    </section>
  );
}
