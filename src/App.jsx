import { useState, useEffect } from "react";
import { Grid } from "./Grid";

import "./App.css";

function App() {
  const [state, setState] = useState({
    gridSize: 800,
    tilesPerRow: 20,
  });

  const [tiles, setTiles] = useState([]);

  const initTiles = () => {
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
    setTiles(newTiles);
  };

  useEffect(() => {
    initTiles();
  }, [state.tilesPerRow]);

  return (
    <div className="App">
      <div className="title">Watermelon man</div>
      <Grid state={state} tiles={tiles} />
    </div>
  );
}

export default App;
