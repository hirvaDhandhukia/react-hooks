// this component shows how to use react useState function with a component tree (multiple components)
// creating a rating app

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];
function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}

function StarRating({ totalStars }) {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        Ratings: {selectedStars} from {totalStars}
      </p>
    </>
  );
}

function ComponentTree() {
  return (
    <div class="star-rating">
      <StarRating totalStars={5} />
    </div>
  );
}

export default ComponentTree;
