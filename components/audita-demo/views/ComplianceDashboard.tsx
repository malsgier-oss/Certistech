"use client";

export default function ComplianceDashboard() {
  const kpis = [
    { label: "Documents Archived", value: "1,247" },
    { label: "Retention Compliant", value: "98%" },
    { label: "Legal Holds", value: "3" },
    { label: "Pending Disposal", value: "12" },
  ];

  const storageData = [
    { type: "Invoice", count: 342, size: "45 MB" },
    { type: "Contract", count: 189, size: "128 MB" },
    { type: "Bank Statement", count: 256, size: "32 MB" },
    { type: "Receipt", count: 460, size: "18 MB" },
  ];

  return (
    <div className="flex flex-col h-full overflow-auto p-6" style={{ backgroundColor: "var(--audita-content)" }}>
      <div className="text-lg font-medium mb-4">Compliance Dashboard</div>
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
      <div>
        <div className="text-sm font-medium mb-2">Storage by Document Type</div>
        <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "var(--audita-sidebar)" }}>
              <th className="text-left px-3 py-2 font-medium">Type</th>
              <th className="text-right px-3 py-2 font-medium">Count</th>
              <th className="text-right px-3 py-2 font-medium">Size</th>
            </tr>
          </thead>
          <tbody>
            {storageData.map((r, i) => (
              <tr key={r.type} style={{ backgroundColor: i % 2 === 1 ? "var(--audita-alt-row)" : undefined }}>
                <td className="px-3 py-2">{r.type}</td>
                <td className="px-3 py-2 text-right">{r.count}</td>
                <td className="px-3 py-2 text-right">{r.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
