"use client";
import { useState } from "react";

type Suggestion = {
  id: string;
  title: string;
  impact: "high" | "medium" | "low";
  description: string;
  snippet: string;
};

const suggestions: Suggestion[] = [
  {
    id: "hook",
    title: "Strengthen the introduction hook",
    impact: "high",
    description:
      "Lead with a vivid outcome to immediately frame the expected value for the reader.",
    snippet:
      "Unlock clear communication that feels effortless and guides the reader from idea to impact."
  },
  {
    id: "active",
    title: "Shift passive sentences to active voice",
    impact: "medium",
    description:
      "Active voice increases clarity and reader trust without adding length.",
    snippet:
      "Aurora highlights opportunities so you can edit with confidence, not guesswork."
  },
  {
    id: "transitions",
    title: "Add transitions between sections",
    impact: "low",
    description:
      "Soft transitions guide the reader while preserving momentum and cohesion.",
    snippet:
      "Continue with a connective phrase like 'Next, focus on…' to orient the reader."
  }
];

const impactLabels: Record<Suggestion["impact"], string> = {
  high: "High impact",
  medium: "Medium impact",
  low: "Low impact"
};

export function SuggestionPanel() {
  const [expandedSuggestion, setExpandedSuggestion] = useState<string | null>(
    "hook"
  );

  return (
    <section
      className="suggestion-panel"
      aria-label="AI Suggestions"
      role="region"
    >
      <header className="panel-header">
        <h2>Suggestions</h2>
        <span className="panel-subtitle">Context aware · Updated just now</span>
      </header>
      <ul className="suggestion-list">
        {suggestions.map((suggestion) => {
          const isExpanded = expandedSuggestion === suggestion.id;
          return (
            <li key={suggestion.id} className="suggestion-card">
              <button
                type="button"
                className="suggestion-trigger"
                aria-expanded={isExpanded}
                onClick={() =>
                  setExpandedSuggestion(isExpanded ? null : suggestion.id)
                }
              >
                <span>
                  <span className="suggestion-title">{suggestion.title}</span>
                  <span className={`impact-chip impact-${suggestion.impact}`}>
                    {impactLabels[suggestion.impact]}
                  </span>
                </span>
                <span aria-hidden="true" className="chevron">
                  {isExpanded ? "−" : "+"}
                </span>
              </button>
              <div
                className="suggestion-details"
                role="region"
                aria-hidden={!isExpanded}
              >
                <p>{suggestion.description}</p>
                <div className="suggestion-snippet" aria-label="Suggested copy">
                  {suggestion.snippet}
                </div>
                <button type="button" className="suggestion-action">
                  Apply suggestion
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
