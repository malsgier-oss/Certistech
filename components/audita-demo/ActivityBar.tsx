"use client";

export type AuditaView =
  | "input"
  | "processing"
  | "workspace"
  | "archive"
  | "reports"
  | "compliance"
  | "executive"
  | "search";

const VIEWS: { id: AuditaView; label: string; icon: string }[] = [
  { id: "input", label: "Input", icon: "inbox" },
  { id: "processing", label: "Processing", icon: "zap" },
  { id: "workspace", label: "Workspace", icon: "folder" },
  { id: "archive", label: "Archive", icon: "archive" },
  { id: "reports", label: "Reports", icon: "file-text" },
  { id: "compliance", label: "Compliance", icon: "shield" },
  { id: "executive", label: "Executive", icon: "bar-chart" },
  { id: "search", label: "Search", icon: "search" },
];

export default function ActivityBar({
  activeView,
  onViewChange,
  visible,
}: {
  activeView: AuditaView;
  onViewChange: (view: AuditaView) => void;
  visible: boolean;
}) {
  if (!visible) return null;

  return (
    <div
      className="w-40 shrink-0 flex flex-col py-2"
      style={{ backgroundColor: "var(--audita-sidebar)", borderRight: "1px solid var(--audita-border)" }}
    >
      {VIEWS.map((v) => (
        <button
          key={v.id}
          onClick={() => onViewChange(v.id)}
          className={`flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
            activeView === v.id ? "text-[var(--audita-accent)] font-medium" : "text-[var(--audita-fg)] hover:bg-[var(--audita-btn-hover)]"
          }`}
        >
          <ViewIcon name={v.icon} />
          {v.label}
        </button>
      ))}
    </div>
  );
}

function ViewIcon({ name }: { name: string }) {
  const size = 18;
  const iconProps = { width: size, height: size };
  switch (name) {
    case "inbox":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <path d="M22 12h-6l-2 3h-4l-2-3H2" />
        </svg>
      );
    case "zap":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "folder":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "archive":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4" />
        </svg>
      );
    case "file-text":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "bar-chart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      );
    default:
      return null;
  }
}
