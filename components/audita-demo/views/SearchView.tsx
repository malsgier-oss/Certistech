"use client";

import { MOCK_DOCUMENTS } from "../data/mockDocuments";

export default function SearchView() {
  const results = MOCK_DOCUMENTS;

  return (
    <div className="flex h-full" style={{ backgroundColor: "var(--audita-content)" }}>
      {/* Center: filters + results */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <div className="p-3 flex flex-wrap gap-2 border-b" style={{ borderColor: "var(--audita-border)", backgroundColor: "var(--audita-sidebar)" }}>
          <select className="px-2 py-1.5 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }}>
            <option>Branch</option>
          </select>
          <select className="px-2 py-1.5 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }}>
            <option>Section</option>
          </select>
          <select className="px-2 py-1.5 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }}>
            <option>Type</option>
          </select>
          <select className="px-2 py-1.5 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }}>
            <option>Status</option>
          </select>
          <input type="date" className="px-2 py-1.5 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }} />
          <input type="date" className="px-2 py-1.5 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }} />
          <input type="text" placeholder="Text search" className="px-2 py-1.5 rounded text-xs border flex-1 min-w-[120px]" style={{ borderColor: "var(--audita-border)" }} />
          <label className="flex items-center gap-1 text-xs">
            <input type="checkbox" />
            FTS
          </label>
        </div>
        <div className="flex-1 overflow-auto">
          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "var(--audita-sidebar)" }}>
                <th className="text-left px-3 py-2 font-medium">ID</th>
                <th className="text-left px-3 py-2 font-medium">Type</th>
                <th className="text-left px-3 py-2 font-medium">Section</th>
                <th className="text-left px-3 py-2 font-medium">Status</th>
                <th className="text-left px-3 py-2 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {results.map((d, i) => (
                <tr key={d.id} style={{ backgroundColor: i % 2 === 1 ? "var(--audita-alt-row)" : undefined }}>
                  <td className="px-3 py-2">{d.id}</td>
                  <td className="px-3 py-2">{d.documentType}</td>
                  <td className="px-3 py-2">{d.section}</td>
                  <td className="px-3 py-2">{d.status}</td>
                  <td className="px-3 py-2">{d.extractedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Right: properties */}
      <div
        className="w-56 shrink-0 flex flex-col border-l p-3"
        style={{ borderColor: "var(--audita-border)", backgroundColor: "var(--audita-sidebar)" }}
      >
        <div className="text-sm font-medium mb-2">Properties</div>
        <div className="text-xs space-y-1 text-[var(--audita-dim)]">
          <p>Select a result</p>
        </div>
      </div>
    </div>
  );
}
