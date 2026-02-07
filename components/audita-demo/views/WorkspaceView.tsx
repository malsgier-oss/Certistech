"use client";

export default function WorkspaceView() {
  return (
    <div className="flex h-full" style={{ backgroundColor: "var(--audita-content)" }}>
      {/* Left inspector */}
      <div
        className="w-[420px] shrink-0 flex flex-col border-r overflow-hidden"
        style={{ borderColor: "var(--audita-border)", backgroundColor: "var(--audita-sidebar)" }}
      >
        <div className="p-3 space-y-3 border-b" style={{ borderColor: "var(--audita-border)" }}>
          <div className="text-sm font-medium">Filters</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <select className="px-2 py-1.5 rounded border" style={{ borderColor: "var(--audita-border)" }}>
              <option>Branch</option>
            </select>
            <select className="px-2 py-1.5 rounded border" style={{ borderColor: "var(--audita-border)" }}>
              <option>Section</option>
            </select>
            <select className="px-2 py-1.5 rounded border" style={{ borderColor: "var(--audita-border)" }}>
              <option>Type</option>
            </select>
            <input type="date" className="px-2 py-1.5 rounded border" style={{ borderColor: "var(--audita-border)" }} />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-2 py-1.5 rounded text-xs border"
              style={{ borderColor: "var(--audita-border)" }}
            />
            <button className="px-2 py-1.5 rounded text-xs" style={{ backgroundColor: "var(--audita-btn-hover)" }}>
              Clear
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-2">
          <div className="text-xs text-[var(--audita-dim)] mb-2">File tree</div>
          <div className="space-y-1 text-sm">
            <div className="flex items-center gap-2 py-1 px-2 rounded cursor-pointer hover:bg-[var(--audita-btn-hover)]">
              <span>📁</span> Main Office
            </div>
            <div className="flex items-center gap-2 py-1 px-2 pl-6 rounded cursor-pointer hover:bg-[var(--audita-btn-hover)]">
              <span>📁</span> Companies
            </div>
            <div className="flex items-center gap-2 py-1 px-2 pl-6 rounded cursor-pointer hover:bg-[var(--audita-btn-hover)]" style={{ backgroundColor: "var(--audita-btn-hover)" }}>
              <span>📄</span> invoice_2024.pdf
            </div>
          </div>
          <div className="mt-4 text-xs text-[var(--audita-dim)]">Documents</div>
          <div className="mt-1 space-y-1">
            <div className="px-2 py-1.5 rounded text-sm cursor-pointer" style={{ backgroundColor: "var(--audita-btn-hover)" }}>
              invoice_2024.pdf
            </div>
            <div className="px-2 py-1.5 rounded text-sm cursor-pointer hover:bg-[var(--audita-btn-hover)]">
              contract_2024.pdf
            </div>
          </div>
        </div>
        <div className="p-3 border-t space-y-2" style={{ borderColor: "var(--audita-border)" }}>
          <textarea
            placeholder="Notes"
            className="w-full px-2 py-1.5 rounded text-xs border resize-none"
            style={{ borderColor: "var(--audita-border)", minHeight: 60 }}
            defaultValue="Pending review"
          />
          <button className="w-full px-3 py-2 rounded text-sm" style={{ backgroundColor: "var(--audita-accent)", color: "white" }}>
            Save Notes
          </button>
          <div className="flex flex-wrap gap-1">
            <button className="px-2 py-1 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }}>
              Assign
            </button>
            <button className="px-2 py-1 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }}>
              Set Status
            </button>
            <button className="px-2 py-1 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }}>
              Archive
            </button>
            <button className="px-2 py-1 rounded text-xs border" style={{ borderColor: "var(--audita-warning-border)" }}>
              Flag Follow-up
            </button>
          </div>
        </div>
      </div>

      {/* Center WebView */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex gap-2 p-2 border-b" style={{ borderColor: "var(--audita-border)", backgroundColor: "var(--audita-sidebar)" }}>
          <input
            type="text"
            placeholder="URL"
            className="flex-1 px-3 py-1.5 rounded text-sm border"
            style={{ borderColor: "var(--audita-border)" }}
            defaultValue="about:blank"
          />
        </div>
        <iframe
          src="about:blank"
          title="Document viewer"
          className="flex-1 w-full min-h-0"
          style={{ backgroundColor: "var(--audita-content)" }}
        />
      </div>

      {/* Right preview */}
      <div
        className="w-56 shrink-0 flex flex-col border-l"
        style={{ borderColor: "var(--audita-border)", backgroundColor: "var(--audita-sidebar)" }}
      >
        <div className="p-2 text-sm font-medium">Document Preview</div>
        <div className="flex-1 flex items-center justify-center p-4" style={{ backgroundColor: "var(--audita-content)" }}>
          <span className="text-[var(--audita-dim)] text-sm">Preview</span>
        </div>
      </div>
    </div>
  );
}
