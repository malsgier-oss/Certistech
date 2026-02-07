"use client";

import { useState } from "react";

export default function InputView() {
  const [activeTab, setActiveTab] = useState<"import" | "webcam">("import");

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: "var(--audita-content)" }}>
      <div className="flex border-b" style={{ borderColor: "var(--audita-border)" }}>
        <button
          onClick={() => setActiveTab("import")}
          className={`px-4 py-2 text-sm transition-colors ${
            activeTab === "import"
              ? "border-b-2 font-medium"
              : "text-[var(--audita-dim)] hover:text-[var(--audita-fg)]"
          }`}
          style={activeTab === "import" ? { borderColor: "var(--audita-accent)", color: "var(--audita-accent)" } : {}}
        >
          Import
        </button>
        <button
          onClick={() => setActiveTab("webcam")}
          className={`px-4 py-2 text-sm transition-colors ${
            activeTab === "webcam"
              ? "border-b-2 font-medium"
              : "text-[var(--audita-dim)] hover:text-[var(--audita-fg)]"
          }`}
          style={activeTab === "webcam" ? { borderColor: "var(--audita-accent)", color: "var(--audita-accent)" } : {}}
        >
          Webcam
        </button>
      </div>
      <div className="flex-1 overflow-auto p-6">
        {activeTab === "import" && (
          <div className="space-y-4">
            <div
              className="border-2 border-dashed rounded-lg p-12 text-center"
              style={{ borderColor: "var(--audita-border)", color: "var(--audita-dim)" }}
            >
              <p className="text-sm mb-2">Drop files or folders here</p>
              <p className="text-xs">or</p>
              <div className="flex gap-2 justify-center mt-4">
                <button
                  className="px-4 py-2 rounded text-sm"
                  style={{ backgroundColor: "var(--audita-accent)", color: "white" }}
                >
                  Browse files
                </button>
                <button
                  className="px-4 py-2 rounded text-sm border"
                  style={{ borderColor: "var(--audita-border)", color: "var(--audita-fg)" }}
                >
                  Browse folder
                </button>
              </div>
            </div>
            <div className="flex gap-4 text-sm">
              <div>
                <label className="block text-[var(--audita-dim)] mb-1">Branch</label>
                <select className="w-48 px-3 py-2 rounded border" style={{ borderColor: "var(--audita-border)" }}>
                  <option>Main Office</option>
                  <option>Regional A</option>
                </select>
              </div>
              <div>
                <label className="block text-[var(--audita-dim)] mb-1">Date</label>
                <input type="date" className="px-3 py-2 rounded border" style={{ borderColor: "var(--audita-border)" }} defaultValue="2024-02-07" />
              </div>
            </div>
          </div>
        )}
        {activeTab === "webcam" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[var(--audita-dim)] mb-2">Camera</label>
              <select className="w-64 px-3 py-2 rounded border" style={{ borderColor: "var(--audita-border)" }}>
                <option>Default camera</option>
              </select>
            </div>
            <div
              className="aspect-video rounded border flex items-center justify-center"
              style={{ borderColor: "var(--audita-border)", backgroundColor: "var(--audita-alt-row)" }}
            >
              <span className="text-[var(--audita-dim)] text-sm">Camera preview</span>
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 rounded text-sm"
                style={{ backgroundColor: "var(--audita-accent)", color: "white" }}
              >
                Capture
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
