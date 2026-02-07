"use client";

import { useState } from "react";
import { MOCK_DOCUMENTS } from "../data/mockDocuments";

export default function ProcessingView() {
  const [selectedId, setSelectedId] = useState<number | null>(42);
  const docs = MOCK_DOCUMENTS;
  const selected = docs.find((d) => d.id === selectedId);

  return (
    <div className="flex h-full" style={{ backgroundColor: "var(--audita-content)" }}>
      {/* Left sidebar */}
      <div
        className="w-56 shrink-0 flex flex-col p-3 gap-3"
        style={{ backgroundColor: "var(--audita-sidebar)", borderRight: "1px solid var(--audita-border)" }}
      >
        <div className="text-sm font-medium">Queue: {docs.length} documents</div>
        <div className="flex gap-2">
          <button className="flex-1 px-2 py-1.5 rounded text-xs" style={{ backgroundColor: "var(--audita-accent)", color: "white" }}>
            Refresh
          </button>
          <button className="flex-1 px-2 py-1.5 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }}>
            Set type
          </button>
          <button className="px-2 py-1.5 rounded text-xs border" style={{ borderColor: "var(--audita-border)", color: "var(--audita-error)" }}>
            Delete
          </button>
        </div>
        <select className="w-full px-2 py-1.5 rounded text-xs border" style={{ borderColor: "var(--audita-border)" }}>
          <option>Filter by type</option>
          <option>Invoice</option>
          <option>Contract</option>
        </select>
        <button className="text-xs text-[var(--audita-dim)]">Clear filter</button>
        <div className="text-xs text-[var(--audita-dim)]">
          <div>Total: {docs.length}</div>
          <div>Reviewed: 2</div>
        </div>
        <button
          className="mt-auto px-4 py-2 rounded text-sm"
          style={{ backgroundColor: "var(--audita-accent)", color: "white" }}
        >
          Move to Workspace
        </button>
      </div>

      {/* Center DataGrid */}
      <div className="flex-1 overflow-auto min-w-0">
        <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "var(--audita-sidebar)" }}>
              <th className="text-left px-3 py-2 font-medium">ID</th>
              <th className="text-left px-3 py-2 font-medium">File</th>
              <th className="text-left px-3 py-2 font-medium">Type</th>
              <th className="text-left px-3 py-2 font-medium">Section</th>
              <th className="text-left px-3 py-2 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {docs.map((d, i) => (
              <tr
                key={d.id}
                onClick={() => setSelectedId(d.id)}
                className="cursor-pointer"
                style={{
                  backgroundColor: selectedId === d.id ? "var(--audita-btn-hover)" : i % 2 === 1 ? "var(--audita-alt-row)" : undefined,
                }}
              >
                <td className="px-3 py-2">{d.id}</td>
                <td className="px-3 py-2 truncate max-w-[140px]">{d.filePath.split("\\").pop()}</td>
                <td className="px-3 py-2">{d.documentType}</td>
                <td className="px-3 py-2">{d.section}</td>
                <td className="px-3 py-2">{d.extractedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right preview */}
      <div
        className="w-64 shrink-0 flex flex-col border-l"
        style={{ backgroundColor: "var(--audita-sidebar)", borderColor: "var(--audita-border)" }}
      >
        <div className="p-2 flex justify-end">
          <button className="text-xs text-[var(--audita-dim)]">Hide</button>
        </div>
        <div className="flex-1 flex items-center justify-center p-4" style={{ backgroundColor: "var(--audita-content)" }}>
          {selected ? (
            <div className="text-sm text-center space-y-2">
              <p className="font-medium">{selected.documentType}</p>
              <p className="text-xs text-[var(--audita-dim)]">{selected.amounts || "—"}</p>
              <p className="text-xs">{selected.notes || "No notes"}</p>
            </div>
          ) : (
            <span className="text-[var(--audita-dim)] text-sm">Select a document</span>
          )}
        </div>
      </div>
    </div>
  );
}
