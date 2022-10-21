import s from "./App.module.css";
import { getIssLocationNow } from "../../services/ApiData";
import LocationStatus from "../LocationStatus/LocationStatus";
import { useEffect, useState } from "react";

function App() {
  const [issPosition, setIssPosition] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  useEffect(() => {
    getIssLocationNow().then(({ data }) => {
      setIssPosition(data.iss_position);
      setTimestamp(data.timestamp);
    });
  }, []);

  const date1 = new Date(timestamp) / 1000.0;
  const date2 = new Date().getTime();
  console.log(timestamp);
  console.log("date1", date1);
  console.log("date2", date2);
  Math.round(new Date().getTime());
  // console.log("result", result);

  function utcformat(d) {
    const di = new Date(d);
    const tail = "GMT";
    const result = di.getUTCFullYear();
    // console.log("RESULT", result);
    return result;
  }
  utcformat(timestamp);
  return <LocationStatus issPosition={issPosition} />;
}

export default App;
