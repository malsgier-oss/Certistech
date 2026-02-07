"use client";

export default function ExecutiveDashboard() {
  const kpis = [
    { label: "Total Documents", value: "1,247" },
    { label: "Ready for Audit", value: "89" },
    { label: "Cleared (30d)", value: "312" },
    { label: "Open Issues", value: "5" },
  ];

  const volumeByBranch = [
    { branch: "Main Office", count: 842 },
    { branch: "Regional A", count: 405 },
  ];

  const topIssues = [
    { id: 1, desc: "Missing supporting document", count: 2 },
    { id: 2, desc: "Amount mismatch", count: 1 },
  ];

  return (
    <div className="flex flex-col h-full overflow-auto p-6" style={{ backgroundColor: "var(--audita-content)" }}>
      <div className="text-lg font-medium mb-4">Executive Dashboard</div>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {kpis.map((k) => (
          <div
            key={k.label}
            className="p-4 rounded border"
            style={{ backgroundColor: "var(--audita-sidebar)", borderColor: "var(--audita-border)" }}
          >
            <div className="text-2xl font-semibold" style={{ color: "var(--audita-accent)" }}>{k.value}</div>
            <div className="text-sm text-[var(--audita-dim)]">{k.label}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="text-sm font-medium mb-2">Volume by Branch</div>
          <div className="space-y-2">
            {volumeByBranch.map((v) => (
              <div key={v.branch} className="flex items-center gap-2">
                <div className="w-24 text-sm">{v.branch}</div>
                <div className="flex-1 h-6 rounded overflow-hidden" style={{ backgroundColor: "var(--audita-border)" }}>
                  <div
                    className="h-full rounded"
                    style={{ width: `${(v.count / 842) * 100}%`, backgroundColor: "var(--audita-accent)" }}
                  />
                </div>
                <span className="text-sm w-12">{v.count}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-medium mb-2">Top Issues</div>
          <div className="space-y-2">
            {topIssues.map((i) => (
              <div key={i.id} className="text-sm p-2 rounded" style={{ backgroundColor: "var(--audita-sidebar)" }}>
                {i.desc} <span className="text-[var(--audita-dim)]">({i.count})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="text-sm font-medium mb-2">6-Month Volume Trend</div>
        <div className="h-32 flex items-end gap-1" style={{ backgroundColor: "var(--audita-sidebar)" }}>
          {[65, 72, 68, 85, 78, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{ height: `${h}%`, backgroundColor: "var(--audita-accent)" }}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-[var(--audita-dim)] mt-1">
          <span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span>
        </div>
      </div>
    </div>
  );
}
