"use client";
import { useId, useState } from "react";

type Option = {
  label: string;
  value: string;
};

const toneOptions: Option[] = [
  { label: "Professional", value: "professional" },
  { label: "Friendly", value: "friendly" },
  { label: "Inspirational", value: "inspirational" },
  { label: "Concise", value: "concise" }
];

const styleOptions: Option[] = [
  { label: "Blog Post", value: "blog" },
  { label: "Email", value: "email" },
  { label: "Report", value: "report" },
  { label: "Narrative", value: "narrative" }
];

const audienceOptions: Option[] = [
  { label: "Executives", value: "executives" },
  { label: "Peers", value: "peers" },
  { label: "General Public", value: "general" },
  { label: "Students", value: "students" }
];

const Section = ({
  title,
  options,
  value,
  onChange
}: {
  title: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}) => {
  const groupId = useId();

  return (
    <fieldset className="sidebar-section" aria-labelledby={`${groupId}-label`}>
      <legend id={`${groupId}-label`}>{title}</legend>
      <div className="choice-list" role="radiogroup">
        {options.map((option) => (
          <label
            key={option.value}
            className={`choice${value === option.value ? " is-active" : ""}`}
          >
            <input
              type="radio"
              name={groupId}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export function Sidebar({
  expanded
}: {
  expanded: boolean;
}) {
  const [tone, setTone] = useState("professional");
  const [style, setStyle] = useState("blog");
  const [audience, setAudience] = useState("general");

  return (
    <aside
      className={`sidebar${expanded ? " is-expanded" : ""}`}
      aria-hidden={!expanded}
    >
      <div className="sidebar-content">
        <Section
          title="Tone"
          options={toneOptions}
          value={tone}
          onChange={setTone}
        />
        <Section
          title="Style"
          options={styleOptions}
          value={style}
          onChange={setStyle}
        />
        <Section
          title="Audience"
          options={audienceOptions}
          value={audience}
          onChange={setAudience}
        />
        <div className="sidebar-footer" role="status" aria-live="polite">
          Adapting suggestions for a {tone} tone, {style} format, and{" "}
          {audience} readers.
        </div>
      </div>
    </aside>
  );
}
