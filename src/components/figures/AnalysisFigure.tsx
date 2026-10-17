export function AnalysisFigure() {
  return (
    <figure className="analysis-figure">
      <div className="analysis-art">
        <div className="figure-topline">
          <span>From conversations to a direction</span>
          <span aria-hidden="true">02 / 03</span>
        </div>
        <div className="call-count">
          <strong>65</strong>
          <span>
            sales calls
            <br />
            in the initial batch
          </span>
        </div>
        <ol className="analysis-steps">
          <li>
            <span className="step-dot" aria-hidden="true" />
            <span>Source</span>
            <strong>Sales conversations</strong>
          </li>
          <li>
            <span className="step-dot" aria-hidden="true" />
            <span>Finding</span>
            <strong>A gap in the product story</strong>
          </li>
          <li>
            <span className="step-dot" aria-hidden="true" />
            <span>Recommendation</span>
            <strong>
              Start with purpose.
              <br />
              Connect to customer value.
            </strong>
          </li>
        </ol>
        <div className="analysis-note">
          <span aria-hidden="true">↗</span> Analysis handed to sales enablement
        </div>
      </div>
      <figcaption>
        Conceptual overview of the analysis and recommendation.
      </figcaption>
    </figure>
  );
}
