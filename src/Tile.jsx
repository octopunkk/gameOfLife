import React from "react";

export const Tile = (props) => {
  const tileSize = props.state.gridSize / props.state.tilesPerRow;
  const color = props.tiles[props.rowIndex][props.tileIndex].activated
    ? "black"
    : "white";
  return (
    <div
      className="Tile"
      style={{ height: tileSize, width: tileSize, backgroundColor: color }}
      onClick={() => {
        props.toggleTile(props.rowIndex, props.tileIndex);
      }}
    ></div>
  );
};
