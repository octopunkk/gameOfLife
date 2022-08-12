import React from "react";

export const Tile = (props) => {
  const tileSize = props.state.gridSize / props.state.tilesPerRow;
  return (
    <div className="Tile" style={{ height: tileSize, width: tileSize }}>
      c
    </div>
  );
};
