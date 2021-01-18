import React, { useState } from "react";
import { data } from "../Components/data/data";

const UseStateOfArray = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateOfArray;
