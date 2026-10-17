export function WorkflowFigure({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={"workflow-figure" + (compact ? " compact" : "")}>
      <div className="workflow-art">
        <div className="figure-topline">
          <span>Information → Something useful</span>
          <span aria-hidden="true">01 / 03</span>
        </div>
        <ol className="workflow-stages">
          <li className="source-stage">
            <span className="stage-index">01 / Source</span>
            <div className="source-paper">
              <span className="paper-fold" aria-hidden="true" />
              <span className="paper-label">Product materials</span>
              <span className="paper-line" aria-hidden="true" />
              <span className="paper-line short" aria-hidden="true" />
              <span className="source-tags">
                <span>Knowledge</span>
                <span>Format</span>
              </span>
            </div>
          </li>
          <li className="knowledge-stage">
            <span className="flow-connector" aria-hidden="true">
              ↓
            </span>
            <div className="knowledge-core">
              <span className="core-mark" aria-hidden="true">
                ✳
              </span>
              <div>
                <span className="stage-index">02 / Connect</span>
                <strong>Usable product knowledge</strong>
              </div>
              <span className="core-dot" aria-hidden="true" />
            </div>
            <span className="flow-connector" aria-hidden="true">
              ↓
            </span>
          </li>
          <li className="output-stage">
            <span className="stage-index">03 / Create</span>
            <div className="output-papers">
              <div className="mini-doc">
                <span className="paper-label">Document</span>
                <span className="paper-line" />
                <span className="paper-line short" />
                <span className="paper-line" />
                <span className="paper-line short" />
              </div>
              <div className="mini-slide">
                <span className="paper-label">Slide deck</span>
                <span className="slide-title">
                  A clearer
                  <br />
                  product story.
                </span>
                <span className="slide-rule" aria-hidden="true" />
              </div>
            </div>
          </li>
        </ol>
      </div>
      <figcaption>
        Illustrative overview. Internal materials are not shown.
      </figcaption>
    </figure>
  );
}
