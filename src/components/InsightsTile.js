export default function InsightsTile(props) {
  return (
    <div className="col-lg-12">
      <div className="shadow-sm p-3 mb-5 bg-white rounded text-start">
        <h3 className="m-2">
          <strong>ZooTools insights</strong>
        </h3>
        <p className="m-2">Making analytics simple and actionable</p>
        <div className="row mt-4">
          <div className="col-6">
            <h7 className="m-2">
              <strong>Summary</strong>
            </h7>
            <div className="m-2">
              <div className="small">
                <strong>Sign ups are slowing down.</strong> -5% new than last
                week.
              </div>
              <div className="small">
                <strong>80% </strong>of your signups were invited by other
                members.
              </div>
              <div className="small">
                <strong>80% </strong>of your signups were invited by friends.
              </div>
              <div className="small">
                <strong>80% </strong>of your signups were invited by friends.
              </div>
            </div>
          </div>
          <div className="col-6">
            <h7 className="m-2 col-7">
              <strong>Recommendation</strong>
            </h7>
            <div className="m-2">
              <div className="my-2 small">
                <strong>Make sure to promote and share your form</strong>
              </div>
              <div className="my-2 small">
                <strong>
                  Congrats! This is huge. Keep giving rewards for your users.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
