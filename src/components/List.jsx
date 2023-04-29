import React, { useState } from "react";
import Person from "./Person";
import reviews from "../data";

function List() {
  const [index, setIndex] = useState(0);
  const handleNextButton = () => {
    if (index === reviews.length - 1) {
      return;
    }
    setIndex(index + 1);
  };
  const handlePrevButton = () => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  };

  return (
    <div className="review">
      <Person {...reviews[index]} />
      <div className="btn-container">
        <button className="prev-btn" onClick={handlePrevButton}>
          prev
        </button>
        <button className="next-btn" onClick={handleNextButton}>
          next
        </button>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => {
            const random = Math.floor(Math.random() * reviews.length);
            setIndex(random);
          }}
        >
          surprise me
        </button>
      </div>
    </div>
  );
}

export default List;
