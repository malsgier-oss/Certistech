"use client";

export default function StatusBar({ status }: { status: string }) {
  return (
    <div
      className="h-6 flex items-center px-3 text-xs shrink-0"
      style={{ backgroundColor: "var(--audita-sidebar)", color: "var(--audita-dim)", borderTop: "1px solid var(--audita-border)" }}
    >
      {status}
    </div>
  );
}
