"use client";

import { useState } from "react";
import TitleBar from "./TitleBar";
import ActivityBar from "./ActivityBar";
import type { AuditaView } from "./ActivityBar";
import StatusBar from "./StatusBar";
import ProgressBar from "./ProgressBar";
import InputView from "./views/InputView";
import ProcessingView from "./views/ProcessingView";
import WorkspaceView from "./views/WorkspaceView";
import ArchiveView from "./views/ArchiveView";
import ReportsView from "./views/ReportsView";
import ComplianceDashboard from "./views/ComplianceDashboard";
import ExecutiveDashboard from "./views/ExecutiveDashboard";
import SearchView from "./views/SearchView";

export default function AuditaDemoFrame() {
  const [activeView, setActiveView] = useState<AuditaView>("processing");
  const [panelCollapsed, setPanelCollapsed] = useState(false);
  const [progressVisible, setProgressVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const renderView = () => {
    switch (activeView) {
      case "input":
        return <InputView />;
      case "processing":
        return <ProcessingView />;
      case "workspace":
        return <WorkspaceView />;
      case "archive":
        return <ArchiveView />;
      case "reports":
        return <ReportsView />;
      case "compliance":
        return <ComplianceDashboard />;
      case "executive":
        return <ExecutiveDashboard />;
      case "search":
        return <SearchView />;
      default:
        return <ProcessingView />;
    }
  };

  return (
    <div
      className="audita-demo flex flex-col rounded-lg overflow-hidden shadow-2xl"
      style={{
        minWidth: 800,
        minHeight: 500,
        width: 1100,
        height: 700,
        backgroundColor: "var(--audita-content)",
        color: "var(--audita-fg)",
      }}
    >
      <TitleBar panelCollapsed={panelCollapsed} onTogglePanel={() => setPanelCollapsed(!panelCollapsed)} />
      <ProgressBar
        visible={progressVisible}
        progress={progress}
        onCancel={() => setProgressVisible(false)}
      />
      <div className="flex flex-1 min-h-0 overflow-hidden">
        <ActivityBar
          activeView={activeView}
          onViewChange={setActiveView}
          visible={!panelCollapsed}
        />
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {renderView()}
        </div>
      </div>
      <StatusBar status="Ready" />
    </div>
  );
}
