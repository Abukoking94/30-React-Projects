import React, { useState } from "react";
import data from "./data";

function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(selectedId) {
    setSelected(selected === selectedId ? null : selectedId);
  }
  return (
    <div>
      {data && data.length > 0 ? (
        <div>
          {data.map((dataItem) => (
            <div
              onClick={() => handleSingleSelection(dataItem.id)}
              key={dataItem.id}
            >
              <div className="titke">
                <h1>{dataItem.question}</h1>
                <span>+</span>
              </div>

              {selected === dataItem.id ? (
                <div className="answer"> {dataItem.answer}</div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div>No data Found</div>
                                                                                                                                                                                                                                                                                                                                                                                                                                       )}
    </div>
  );
}

export default Accordian;
  