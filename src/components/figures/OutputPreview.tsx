export function OutputPreview() {
  return (
    <figure className="output-preview">
      <div className="output-preview-art">
        <div className="figure-topline">
          <span>Product facts → A useful explanation</span>
        </div>
        <div className="preview-source">
          <span className="eyebrow">Source / Fictional product</span>
          <p>Shared schedules + change notifications</p>
          <span className="plan-tag">Included in Team</span>
        </div>
        <span className="preview-connector" aria-hidden="true">
          ↓
        </span>
        <div className="preview-slide">
          <span className="eyebrow">Prepared slide example</span>
          <h4>
            Keep the team
            <br />
            on the same page.
          </h4>
          <p>
            A shared schedule.
            <br />A clear view of what changed.
          </p>
          <div>
            Team plan <span aria-hidden="true">↗</span>
          </div>
        </div>
      </div>
      <figcaption>
        Original example using fictional information. Internal work is not
        shown.
      </figcaption>
    </figure>
  );
}
