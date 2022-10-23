import React from "react";
import userImage from "../../images/svg/user.svg";
import s from "./PeopleList.module.css";
function PeopleList({ astrosPeople }) {
  return (
    <>
      <div>
        <ul className={s.ul}>
          {astrosPeople &&
            astrosPeople.map((data) => {
              return (
                data.craft === "ISS" && (
                  <li key={data.name} className={s.li}>
                    <img src={userImage} className={s.img} alt="user" />
                    <p className={s.userName}>{data.name}</p>
                  </li>
                )
              );
            })}
        </ul>
        <p className={s.p}>
          Total amount:
          {astrosPeople && astrosPeople.length}
        </p>
      </div>
    </>
  );
}

export default PeopleList;
