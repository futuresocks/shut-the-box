import './App.css';
import { useState, useEffect, useRef } from 'react';
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

const SUMS = {
  1: [[1]],
  2: [[2]],
  3: [[1,2], [3]],
  4: [[1,3], [4]],
  5: [[2,3], [1,4], [5]],
  6: [[2,4], [1,5], [6]],
  7: [[1,6], [2,5], [3,4], [1,2,4], [7]],
  8: [[1,7], [3,5], [2,6], [1,2,5],[1,3,4],[8]],
  9: [[1,2,6], [1,3,5], [1,8], [2,3,4], [2,7], [3,6],[4,5],[9]],
  10:[[1,2,3,4], [1,2,7], [1,3,6], [1,4,5], [1,9], [2,3,5], [2,8], [3,7], [4,6]],
  11: [[1,2,3,5],[1,2,8],[1,3,7],[1,4,6],[2,3,6],[2,4,5],[2,9],[3,8],[4,7],[5,6]],
  12: [[1,2,3,6], [1,2,4,5], [1,2,9],[1,3,8],[1,4,7],[1,5,6],[2,3,7],[2,4,6],[3,4,5],[3,9],[4,8],[5,7]]
}

function App() {
  const [selected, setSelected] = useState([]);
  const [valid, setValid] = useState([1,2,3,4,5,6,7,8,9])
  const [target, setTarget] = useState(12);
  const [dice, setDice] = useState(null);
  
  useEffect(() => {
    if(!selected.length) return setValid([1,2,3,4,5,6,7,8,9]);
    const validSums = SUMS[target];
    const newValids = validSums.filter(arr => selected.every(num => arr.includes(num)));
    const flattened = newValids.reduce((acc, arr) => [...acc, ...arr], []);
    const uniques = [...new Set(flattened)];
    setValid(uniques);
  }, [selected, target]);

  const toggleNumber = (number) => {
    const updated = selected.includes(number) ? selected.filter(num => num != number) : [...selected, number];
    setSelected(updated);
  }

  const rollDone = (score) => {
    setTarget(score)
  }

  const rollAll = () => {
    dice.rollAll();
  }

  return (
    <div className="App">
     {[1,2,3,4,5,6,7,8,9].map(number => <button disabled={!valid.includes(number) || number > target} onClick={()=> toggleNumber(number)}>{number}</button>)}
     <ReactDice
          numDice={2}
          rollDone={rollDone}
          ref={dice => setDice(dice)}
          disableIndividual
        />
        <button onClick={rollAll}>ROLL EM</button>
    </div>
  );
}

export default App;
