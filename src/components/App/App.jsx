import s from "./App.module.css";
import { getIssLocationNow, getPeopleAstros } from "../../services/ApiData";
import LocationStatus from "../LocationStatus/LocationStatus";
import { useEffect, useState } from "react";
import TimeStatus from "../TimeStatus/TimeStatus";
import PeopleList from "../PeopleList/PeopleList";
import ContainerGoogleMap from "../ContainerGoogleMap/ContainerGoogleMap";

function App() {
  const [issPosition, setIssPosition] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [astrosPeople, setAstrosPeople] = useState(null);
  useEffect(() => {
    getIssLocationNow().then(({ data }) => {
      setIssPosition(data.iss_position);
      setTimestamp(data.timestamp);
    });
    getPeopleAstros().then(({ data }) =>
      setAstrosPeople(data.people.filter((arr) => arr.craft === "ISS"))
    );
    console.log("FIRST");
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getIssLocationNow().then(({ data }) => {
        setIssPosition(data.iss_position);
        setTimestamp(data.timestamp);
      });
      getPeopleAstros().then(({ data }) =>
        setAstrosPeople(data.people.filter((arr) => arr.craft === "ISS"))
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [issPosition, timestamp, astrosPeople]);

  return (
    <>
      <div className={s.container}>
        <div className={s.center}>
          {issPosition && <LocationStatus issPosition={issPosition} />}
          {timestamp && <TimeStatus timestamp={timestamp} />}
        </div>

        <div className={s.center}>
          {issPosition && (
            <div className={s.map}>
              <ContainerGoogleMap issPosition={issPosition} />
            </div>
          )}
          <PeopleList astrosPeople={astrosPeople} />
        </div>
      </div>
    </>
  );
}

export default App;
