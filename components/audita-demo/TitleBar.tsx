"use client";

export default function TitleBar({
  panelCollapsed,
  onTogglePanel,
}: {
  panelCollapsed: boolean;
  onTogglePanel: () => void;
}) {
  return (
    <div
      className="h-9 flex items-center justify-between px-3 shrink-0"
      style={{ backgroundColor: "var(--audita-title)", color: "var(--audita-fg)", borderBottom: "1px solid var(--audita-border)" }}
    >
      <div className="flex items-center gap-4">
        <div className="flex gap-4 text-sm">
          <button className="hover:opacity-80">File</button>
          <button className="hover:opacity-80">Edit</button>
          <button className="hover:opacity-80">View</button>
          <button className="hover:opacity-80">Help</button>
        </div>
        <button
          onClick={onTogglePanel}
          className="p-1 rounded hover:bg-[var(--audita-btn-hover)] transition-colors"
          title={panelCollapsed ? "Show panel" : "Hide panel"}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-[var(--audita-dim)]">Demo User</span>
        <div className="flex">
          <button className="w-8 h-8 flex items-center justify-center hover:bg-[var(--audita-btn-hover)] transition-colors">
            <span className="text-sm">—</span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-[var(--audita-btn-hover)] transition-colors">
            <span className="text-sm">□</span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-[var(--audita-error)] hover:text-white transition-colors">
            <span className="text-sm">✕</span>
          </button>
        </div>
      </div>
    </div>
  );
}
