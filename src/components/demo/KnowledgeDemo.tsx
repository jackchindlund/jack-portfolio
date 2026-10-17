"use client";
import { useState, useSyncExternalStore } from "react";
import { demoDisclosure, demoSources } from "@/content/demo";
const subscribe = () => () => {};
const options = [
  { id: "document", label: "Document" },
  { id: "slide", label: "Slide" },
  { id: "missing", label: "Missing information" },
] as const;
type Choice = (typeof options)[number]["id"];
export function KnowledgeDemo() {
  const enhanced = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const [choice, setChoice] = useState<Choice>("document");
  const [announcement, setAnnouncement] = useState("");
  return (
    <div
      className="knowledge-demo"
      data-enhanced={enhanced ? "true" : undefined}
      data-choice={choice}
    >
      <div className="demo-heading">
        <span className="eyebrow">Follow the source</span>
        <h3>
          One set of facts.
          <br />
          Different useful outputs.
        </h3>
        <p>{demoDisclosure}</p>
      </div>
      <div className="demo-workspace">
        <section className="demo-source" aria-labelledby="source-heading">
          <div className="sheet-bar">
            <span className="sheet-dot" aria-hidden="true" />
            <h4 id="source-heading">Source material</h4>
            <span>Fictional</span>
          </div>
          <ol>
            {demoSources.map((source) => (
              <li key={source.id} id={source.id} tabIndex={-1}>
                <span className="source-number">{source.number}</span>
                <div>
                  <h5>{source.title}</h5>
                  <p>{source.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <div className="demo-result">
          <fieldset className="demo-controls">
            <legend>Choose a prepared output</legend>
            <div>
              {options.map((option) => (
                <label key={option.id}>
                  <input
                    type="radio"
                    name="prepared-output"
                    value={option.id}
                    checked={choice === option.id}
                    onChange={() => {
                      setChoice(option.id);
                      setAnnouncement(option.label + " example selected");
                    }}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="demo-output" data-output="document">
            <span className="output-format">Document / Prepared example</span>
            <h4>Keep the team on the same schedule.</h4>
            <p>
              The Team plan includes shared schedules and change notifications,
              helping a team coordinate from a common schedule.{" "}
              <a href="#source-schedules" aria-label="See source 1">
                [1]
              </a>
            </p>
            <p>
              CSV export is available on both Starter and Team plans.{" "}
              <a href="#source-export" aria-label="See source 2">
                [2]
              </a>
            </p>
            <div className="document-signoff">
              Source information, in a readable explanation.
            </div>
          </div>
          <div className="demo-output" data-output="slide">
            <span className="output-format">Slide / Prepared example</span>
            <div className="demo-slide">
              <span className="eyebrow">A shared view of the work</span>
              <h4>
                Keep plans
                <br />
                in sync.
              </h4>
              <p>
                Team: shared schedules
                <br />+ change notifications{" "}
                <a href="#source-schedules" aria-label="See source 1">
                  [1]
                </a>
              </p>
              <div>
                CSV export on Starter & Team{" "}
                <a href="#source-export" aria-label="See source 2">
                  [2]
                </a>
              </div>
            </div>
          </div>
          <div className="demo-output" data-output="missing">
            <span className="output-format">
              Missing information / Prepared example
            </span>
            <h4>Does this integrate with payroll?</h4>
            <div className="missing-answer">
              <span className="eyebrow">The evidence stops here</span>
              <p>
                The supplied material does not describe payroll integration, so
                I cannot confirm whether it is supported.{" "}
                <a href="#source-payroll" aria-label="See source 3">
                  [3]
                </a>
              </p>
            </div>
            <p className="caption">
              A useful response should make a gap in the source clear.
            </p>
          </div>
        </div>
      </div>
      <span className="sr-only" role="status">
        {announcement}
      </span>
    </div>
  );
}
