"use client";

export default function ReportsView() {
  return (
    <div className="flex flex-col h-full overflow-auto p-6" style={{ backgroundColor: "var(--audita-content)" }}>
      <div className="space-y-6 max-w-2xl">
        <div>
          <div className="text-sm font-medium mb-2">Report configuration</div>
          <div className="flex gap-4 flex-wrap">
            <div>
              <label className="block text-xs text-[var(--audita-dim)] mb-1">Period</label>
              <select className="px-3 py-2 rounded border text-sm" style={{ borderColor: "var(--audita-border)" }}>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-[var(--audita-dim)] mb-1">Date range</label>
              <div className="flex gap-2">
                <input type="date" className="px-3 py-2 rounded border text-sm" style={{ borderColor: "var(--audita-border)" }} />
                <span className="flex items-center">–</span>
                <input type="date" className="px-3 py-2 rounded border text-sm" style={{ borderColor: "var(--audita-border)" }} />
              </div>
            </div>
            <div>
              <label className="block text-xs text-[var(--audita-dim)] mb-1">Format</label>
              <select className="px-3 py-2 rounded border text-sm" style={{ borderColor: "var(--audita-border)" }}>
                <option>PDF</option>
                <option>Excel</option>
                <option>CSV</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div className="text-sm font-medium mb-2">Filters</div>
          <div className="flex gap-2 flex-wrap">
            <select className="px-3 py-2 rounded border text-sm" style={{ borderColor: "var(--audita-border)" }}>
              <option>Branch</option>
            </select>
            <select className="px-3 py-2 rounded border text-sm" style={{ borderColor: "var(--audita-border)" }}>
              <option>Section</option>
            </select>
            <select className="px-3 py-2 rounded border text-sm" style={{ borderColor: "var(--audita-border)" }}>
              <option>Status</option>
            </select>
            <select className="px-3 py-2 rounded border text-sm" style={{ borderColor: "var(--audita-border)" }}>
              <option>Doc Type</option>
            </select>
          </div>
        </div>
        <div>
          <div className="text-sm font-medium mb-2">Report type</div>
          <div className="space-y-2">
            {["Daily Summary", "Branch Summary", "Section Summary", "Type Summary", "User Activity"].map((t) => (
              <label key={t} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="reportType" defaultChecked={t === "Daily Summary"} />
                <span className="text-sm">{t}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded text-sm" style={{ backgroundColor: "var(--audita-accent)", color: "white" }}>
            Generate PDF
          </button>
          <button className="px-4 py-2 rounded text-sm border" style={{ borderColor: "var(--audita-border)" }}>
            Generate Excel
          </button>
          <button className="px-4 py-2 rounded text-sm border" style={{ borderColor: "var(--audita-border)" }}>
            Generate CSV
          </button>
        </div>
        <div>
          <div className="text-sm font-medium mb-2">Report History</div>
          <div className="text-sm text-[var(--audita-dim)]">No reports generated yet.</div>
        </div>
      </div>
    </div>
  );
}
