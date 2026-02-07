"use client";

import { MOCK_DOCUMENTS } from "../data/mockDocuments";

export default function ArchiveView() {
  const archived = MOCK_DOCUMENTS.filter((d) => d.status === "Cleared" || d.archivedAt);

  return (
    <div className="flex h-full" style={{ backgroundColor: "var(--audita-content)" }}>
      {/* Left filters */}
      <div
        className="w-[200px] shrink-0 p-3 space-y-3 overflow-auto"
        style={{ backgroundColor: "var(--audita-sidebar)", borderRight: "1px solid var(--audita-border)" }}
      >
        <div className="text-sm font-medium">Filters</div>
        <select className="w-full px-2 py-1.5 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }}>
          <option>Branch</option>
        </select>
        <select className="w-full px-2 py-1.5 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }}>
          <option>Section</option>
        </select>
        <select className="w-full px-2 py-1.5 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }}>
          <option>Type</option>
        </select>
        <div className="text-xs text-[var(--audita-dim)]">Legal Hold</div>
        <select className="w-full px-2 py-1.5 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }}>
          <option>All</option>
        </select>
        <input type="text" placeholder="Search" className="w-full px-2 py-1.5 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }} />
        <button className="w-full px-2 py-1.5 rounded text-xs" style={{ backgroundColor: "var(--audita-btn-hover)" }}>
          Clear
        </button>
      </div>

      {/* Center */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <div className="flex items-center gap-4 p-2 border-b" style={{ borderColor: "var(--audita-border)", backgroundColor: "var(--audita-sidebar)" }}>
          <span className="text-sm">Archived: {archived.length}</span>
          <div className="flex gap-2">
            <button className="px-2 py-1 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }}>
              Columns
            </button>
            <button className="px-2 py-1 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }}>
              Export
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "var(--audita-sidebar)" }}>
                <th className="text-left px-3 py-2 font-medium">ID</th>
                <th className="text-left px-3 py-2 font-medium">Type</th>
                <th className="text-left px-3 py-2 font-medium">Archived</th>
                <th className="text-left px-3 py-2 font-medium">Retention Expiry</th>
                <th className="text-left px-3 py-2 font-medium">Section</th>
              </tr>
            </thead>
            <tbody>
              {archived.map((d, i) => (
                <tr
                  key={d.id}
                  style={{ backgroundColor: i % 2 === 1 ? "var(--audita-alt-row)" : undefined }}
                >
                  <td className="px-3 py-2">{d.id}</td>
                  <td className="px-3 py-2">{d.documentType}</td>
                  <td className="px-3 py-2">{d.archivedAt?.slice(0, 10) || "—"}</td>
                  <td className="px-3 py-2">{d.retentionExpiryDate || "—"}</td>
                  <td className="px-3 py-2">{d.section}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right details */}
      <div
        className="w-56 shrink-0 flex flex-col border-l"
        style={{ borderColor: "var(--audita-border)", backgroundColor: "var(--audita-sidebar)" }}
      >
        <div className="p-2 text-sm font-medium">Details</div>
        <div className="flex-1 p-3 text-xs space-y-2" style={{ color: "var(--audita-dim)" }}>
          <p>Select a document</p>
        </div>
      </div>
    </div>
  );
}
