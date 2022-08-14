import { useState, useEffect } from "react";
import { Grid } from "./Grid";

import "./App.css";

let intervalID;

function App() {
  const [state, setState] = useState({
    gridSize: 800,
    tilesPerRow: 10,
    updateInterval: 100,
    running: false,
  });

  const [tiles, setTiles] = useState(() => {
    let newTiles = [];
    for (let i = 0; i < state.tilesPerRow; i++) {
      let row = [];
      for (let j = 0; j < state.tilesPerRow; j++) {
        let tile = {
          activated: false,
        };
        row.push(tile);
      }
      newTiles.push(row);
    }
    return newTiles;
  });

  const toggleTile = (x, y) => {
    setTiles((prev) => {
      let newTiles = structuredClone(prev);
      newTiles[x][y].activated = !prev[x][y].activated;
      return newTiles;
    });
  };

  const willLive = (x, y) => {
    // If the cell is alive, then it stays alive if it has either 2 or 3 live neighbors.
    // If the cell is dead, then it springs to life only in the case that it has 3 live neighbors.
    let aliveNeighbors = 0;
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (
          i < 0 ||
          j < 0 ||
          i >= state.tilesPerRow ||
          j >= state.tilesPerRow ||
          (i == x && j == y)
        )
          continue;
        if (tiles[i][j].activated) aliveNeighbors += 1;
      }
    }
    if (aliveNeighbors == 3) {
      return true;
    }
    if (aliveNeighbors == 2 && tiles[x][y].activated) {
      return true;
    }
    return false;
  };

  const updateTiles = () => {
    if (state.running) {
      setTiles((prev) => {
        let newTiles = structuredClone(prev);
        for (let x = 0; x < state.tilesPerRow; x++) {
          for (let y = 0; y < state.tilesPerRow; y++) {
            newTiles[x][y].activated = willLive(x, y);
          }
        }
        return newTiles;
      });
    }
  };

  const handleClick = () => {
    if (!state.running) {
      setState((prev) => {
        let newState = structuredClone(prev);
        newState.running = true;
        return newState;
      });
    } else {
      // clearInterval(intervalID);
      setState((prev) => {
        let newState = structuredClone(prev);
        newState.running = false;
        return newState;
      });
    }
  };
  intervalID = setInterval(updateTiles, state.updateInterval);

  return (
    <div className="App">
      <div className="title">Watermelon man</div>
      <button onClick={handleClick}>play / pause</button>
      <Grid state={state} tiles={tiles} toggleTile={toggleTile} />
    </div>
  );
}

export default App;
