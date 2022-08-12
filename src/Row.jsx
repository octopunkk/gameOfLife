import React from "react";
import { Tile } from "./Tile";

export const Row = (props) => {
  return (
    <div className="Row">
      {props.row.map((tile, index) => {
        return (
          <Tile
            rowIndex={props.rowIndex}
            tileIndex={index}
            tile={tile}
            state={props.state}
            tiles={props.tiles}
          />
        );
      })}
    </div>
  );
};
