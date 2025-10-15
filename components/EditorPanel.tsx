"use client";
import { useEffect, useRef, useState } from "react";

const sampleText =
  "Aurora transforms your rough drafts into polished narratives with clarity, confidence, and empathy. Ask for a stronger hook, clearer structure, or grammar review.";

export function EditorPanel({
  onToggleSidebar,
  sidebarExpanded
}: {
  onToggleSidebar: () => void;
  sidebarExpanded: boolean;
}) {
  const [text, setText] = useState(sampleText);
  const [statusMessage, setStatusMessage] = useState("");
  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timers.current.forEach((id) => window.clearTimeout(id));
      timers.current = [];
    };
  }, []);

  const queueStatus = (message: string, nextMessage?: string, delay = 1400) => {
    setStatusMessage(message);
    if (nextMessage) {
      const timeoutId = window.setTimeout(() => {
        setStatusMessage(nextMessage);
      }, delay);
      timers.current.push(timeoutId);
    }
  };

  const handleGrammarCheck = () => {
    queueStatus(
      "Grammar review queued. Suggestions will appear shortly.",
      "Grammar review complete. 3 suggestions ready.",
      1500
    );
  };

  const handleImproveClarity = () => {
    queueStatus(
      "Clarity enhancement in progress…",
      "Clarity suggestions added.",
      1200
    );
  };

  return (
    <section className="editor-panel">
      <header className="editor-toolbar">
        <button
          type="button"
          className="toolbar-button"
          aria-pressed={sidebarExpanded}
          onClick={onToggleSidebar}
        >
          {sidebarExpanded ? "Hide Settings" : "Show Settings"}
        </button>
        <div className="toolbar-actions" role="group" aria-label="Actions">
          <button
            type="button"
            className="toolbar-pill"
            onClick={handleGrammarCheck}
          >
            Grammar Check
          </button>
          <button
            type="button"
            className="toolbar-pill"
            onClick={handleImproveClarity}
          >
            Improve Clarity
          </button>
          <button
            type="button"
            className="toolbar-pill"
            onClick={() =>
              queueStatus(
                "Calibrating tone and pacing…",
                "Style calibration completed. Tone consistent.",
                1000
              )
            }
          >
            Tone Calibration
          </button>
        </div>
      </header>
      <label className="editor-label" htmlFor="editor-textarea">
        Draft
      </label>
      <textarea
        id="editor-textarea"
        className="editor-textarea"
        aria-describedby="editor-helper"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <div id="editor-helper" className="editor-helper" role="status">
        {statusMessage || "Type freely. AI refines your ideas in real time."}
      </div>
    </section>
  );
}
