"use client";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { EditorPanel } from "../components/EditorPanel";
import { SuggestionPanel } from "../components/SuggestionPanel";
import { ProgressTracker } from "../components/ProgressTracker";
import { ProfileMenu } from "../components/ProfileMenu";

export default function HomePage() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className="page-wrapper">
      <header className="topbar">
        <h1 className="logo">Aurora Write</h1>
        <div className="topbar-actions">
          <div className="writing-goal" role="status" aria-live="polite">
            Daily goal: Draft 1,200 words · <strong>On track</strong>
          </div>
          <ProfileMenu />
        </div>
      </header>
      <main
        className={`main-layout${
          sidebarExpanded ? " has-sidebar" : " no-sidebar"
        }`}
      >
        <Sidebar expanded={sidebarExpanded} />
        <div className="main-content">
          <EditorPanel
            sidebarExpanded={sidebarExpanded}
            onToggleSidebar={() => setSidebarExpanded((prev) => !prev)}
          />
          <div className="panel-grid">
            <SuggestionPanel />
            <ProgressTracker />
          </div>
        </div>
      </main>
    </div>
  );
}
