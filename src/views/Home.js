import BarChart from "../components/BarChart";
import InsightsTile from "../components/InsightsTile";
import StatsTable from "../components/StatsTable";
import TableCard from "../components/TableCard";

export default function HomeView() {
  return (
    <div className="container my-5">
      <div className="row text-start">
        <h6 className="col-8">
          <strong>Summer referral competition</strong>
        </h6>
        <div className="col-3 shadow-sm mb-5 bg-white rounded text-center">
          <button type="button" class="btn btn-light btn-sm m-1">
            1h
          </button>
          <button type="button" class="btn btn-light btn-sm m-1">
            24h
          </button>
          <button type="button" class="btn btn-light btn-sm m-1">
            30d
          </button>
          <button type="button" class="btn btn-light btn-sm m-1">
            60d
          </button>
        </div>
      </div>
      <div className="row">
        <BarChart />
        <InsightsTile />
        <TableCard tableData={tableData} />
        <StatsTable
          statsData={statsData}
          title={"Traffic"}
          buttonText={"See traffic sources"}
          toggleText={["Source", "City"]}
        />
        <StatsTable
          statsData={statsData2}
          title={"Sign up location"}
          buttonText={"See all countries"}
          toggleText={["Country", "City"]}
        />
        <StatsTable
          statsData={statsData3}
          title={"Behaviour"}
          buttonText={"See all countries"}
          toggleText={["Browsers", "Decides"]}
        />
      </div>
    </div>
  );
}

const tableData = [
  ["example1@gmail.com", "5000", "USA"],
  ["example2@gmail.com", "3000", "Germany"],
  ["example3@gmail.com", "2000", "Japan"],
  ["example4@gmail.com", "500", "India"],
];

const statsData = [
  ["Google", 30000, Math.round((100 * 30000) / 70000)],
  ["Twitter", 20000, (100 * 20000) / 70000],
  ["Facebook", 10000, (100 * 10000) / 70000],
  ["LinkedIn", 5000, (100 * 5000) / 70000],
  ["YouTube", 3000, (100 * 3000) / 70000],
  ["Other", 2000, (100 * 2000) / 70000],
];

const statsData2 = [
  ["United States", 30000, Math.round((100 * 30000) / 70000)],
  ["Germany", 20000, (100 * 20000) / 70000],
  ["Netherlands", 10000, (100 * 10000) / 70000],
  ["India", 5000, (100 * 5000) / 70000],
  ["Japan", 3000, (100 * 3000) / 70000],
  ["Other", 2000, (100 * 2000) / 70000],
];

const statsData3 = [
  ["United States", 30000, Math.round((100 * 30000) / 70000)],
  ["Germany", 20000, (100 * 20000) / 70000],
  ["Netherlands", 10000, (100 * 10000) / 70000],
  ["India", 5000, (100 * 5000) / 70000],
  ["Japan", 3000, (100 * 3000) / 70000],
  ["Other", 2000, (100 * 2000) / 70000],
];
