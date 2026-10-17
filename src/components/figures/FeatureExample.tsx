export function FeatureExample() {
  return (
    <figure className="feature-example">
      <div className="feature-sheet">
        <div className="figure-topline">
          <span>Fictional feature reference</span>
          <span>Example entry</span>
        </div>
        <h3>Shared schedules</h3>
        <dl>
          <div>
            <dt>Capability</dt>
            <dd>View a shared schedule and receive change notifications.</dd>
          </div>
          <div>
            <dt>Relevant audience</dt>
            <dd>Teams coordinating work on a common schedule.</dd>
          </div>
          <div>
            <dt>Availability</dt>
            <dd>
              <span className="plan-tag">Team plan</span>
            </dd>
          </div>
        </dl>
      </div>
      <figcaption>
        Original example using fictional product information. This is not the
        internal catalog.
      </figcaption>
    </figure>
  );
}
