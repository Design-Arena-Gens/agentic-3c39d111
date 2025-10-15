const goals = [
  {
    id: "goal-wordcount",
    label: "Word count",
    progress: 620,
    target: 1000
  },
  {
    id: "goal-structure",
    label: "Outline coverage",
    progress: 4,
    target: 5
  },
  {
    id: "goal-edit",
    label: "Review suggestions",
    progress: 2,
    target: 6
  }
];

export function ProgressTracker() {
  return (
    <section
      className="progress-tracker"
      role="status"
      aria-live="polite"
      aria-label="Writing goals"
    >
      <header className="panel-header">
        <h2>Progress</h2>
        <span className="panel-subtitle">Aligned with today&apos;s goals</span>
      </header>
      <ul className="progress-list">
        {goals.map((goal) => {
          const ratio = Math.min(goal.progress / goal.target, 1);
          const percentage = Math.round(ratio * 100);
          return (
            <li key={goal.id} className="progress-item">
              <div className="progress-label">
                <span>{goal.label}</span>
                <span className="progress-value">
                  {goal.progress}
                  {goal.id === "goal-wordcount" ? "" : ""}
                  <span className="progress-target">/{goal.target}</span>
                </span>
              </div>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={goal.target}
                aria-valuenow={goal.progress}
                aria-valuetext={`${percentage}%`}
              >
                <div
                  className="progress-bar-fill"
                  style={{ width: `${percentage}%` }}
                  aria-hidden="true"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
