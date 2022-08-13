import React from "react";
import { Row } from "./Row";

export const Grid = (props) => {
  return (
    <div
      className="Grid"
      style={{ height: props.state.gridSize, width: props.state.gridSize }}
    >
      {props.tiles.map((row, index) => {
        return (
          <Row
            rowIndex={index}
            row={row}
            state={props.state}
            tiles={props.tiles}
            toggleTile={props.toggleTile}
            key={index}
          />
        );
      })}
    </div>
  );
};
