import React from "react";

export const Tile = ({ object }) => {
  // Receive an object
  // Iteratie over the values in the object and render <p> elements
  return (
    <div className="tile-container">
      {Object.values(object).map((item, index) => {
        if (index === 0) {
          return (
            <p className="tile-title" key={index}>
              {item}
            </p>
          );
        }
        return (
          <p className="tile" key={index}>
            {item}
          </p>
        );
      })}
    </div>
  );
};
