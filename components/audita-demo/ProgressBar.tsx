"use client";

export default function ProgressBar({
  visible,
  progress,
  onCancel,
}: {
  visible: boolean;
  progress: number;
  onCancel?: () => void;
}) {
  if (!visible) return null;

  return (
    <div
      className="h-6 flex items-center gap-2 px-3 shrink-0"
      style={{ backgroundColor: "var(--audita-sidebar)", borderBottom: "1px solid var(--audita-border)" }}
    >
      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--audita-border)" }}>
        <div
          className="h-full transition-all duration-300"
          style={{ width: `${progress}%`, backgroundColor: "var(--audita-progress)" }}
        />
      </div>
      <button onClick={onCancel} className="text-xs text-[var(--audita-fg)] hover:underline">
        Cancel
      </button>
    </div>
  );
}
