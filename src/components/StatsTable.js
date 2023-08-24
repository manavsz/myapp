export default function StatsTable(props) {
  const dataRows = [];
  props.statsData.forEach((element) => {
    dataRows.push(
      <tr
        className="row m-2 rounded"
        style={{
          backgroundImage: `linear-gradient(to right,lemonchiffon ${element[2]}%,white ${element[2]}%)`,
        }}
      >
        <td className="col-6">{element[0]}</td>
        <td className="col-6 text-end">{element[1]}</td>
      </tr>,
    );
  });
  return (
    <div className="col-lg-6">
      <div className="shadow-sm p-3 mb-5 bg-white rounded text-start">
        <div className="row justify-content-between">
          <h7 className="m-2 col-5">
            <strong>{props.title}</strong>
          </h7>
          <div className="col-5 text-end">
            <small className="rounded p-2 active">{props.toggleText[0]}</small>
            <small className="rounded p-2">{props.toggleText[1]}</small>
          </div>
        </div>
        <table className="table m-2">{dataRows}</table>
        <button type="button" class="btn btn-light btn-sm m-3">
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}
