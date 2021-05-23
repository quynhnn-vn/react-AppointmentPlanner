import React from "react";
import { Tile } from "../tile/Tile";
export const TileList = ({ objects }) => {
  // Receive an array of objects
  // Pass each object in the array to each rendered Tile component
  return (
    <div>
      {objects.map((object, index) => {
        return (
          <Tile
            key={index}
            object={object}
          />
        );
      })}
    </div>
  );
};
