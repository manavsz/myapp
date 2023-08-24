export default function TableCard(props) {
  const dataRows = [];

  props.tableData.forEach((element) => {
    dataRows.push(
      <tr className="row mx-2 my-3 rounded">
        <td className="col-5">{element[0]}</td>
        <td className="col-4">{element[1]}</td>
        <td className="col-2">{element[2]}</td>
      </tr>,
    );
  });

  return (
    <div className="col-lg-6">
      <div className="shadow-sm p-3 mb-5 bg-white rounded text-start">
        <h7 className="m-2">
          <strong>User Leaderboard</strong>
        </h7>
        <table className="table m-2">
          <tr className="row m-2 rounded">
            <td className="col-5">Email</td>
            <td className="col-4">Friends invited</td>
            <td className="col-2">Country</td>
          </tr>
          {dataRows}
        </table>
        <button type="button" class="btn btn-light btn-sm m-3">
          See leaderboard
        </button>
      </div>
    </div>
  );
}
