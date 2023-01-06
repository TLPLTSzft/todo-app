import { useState } from 'react';
import './App.css';

function App() {
  const [teendok, setTeendok] = useState([]);
  const [feladat, setFeladat] = useState("");
  const feladatHozzaadasa = () => {
    teendok.push(feladat);
    console.log(teendok);
  };
  return (
    <div>
      <h1>Teendők</h1>
      <section>
        <h2>Feladat hozzáadása</h2>
        <div>
          <label>Feladat:</label>
        </div>
        <div>
          <input
            type="text"
            placeholder='Feladat'
            value={feladat}
            onInput={e => { setFeladat(e.target.value); }}
          />
          {/* <input type="text" placeholder='Feladat' value={feladat} onInput={e => { setFeladat(e.target.value); }} /> */}
        </div>
        <button onClick={() => feladatHozzaadasa()}>Hozzáad</button>
      </section>
      <section>
        <h2>Teendők</h2>
        <div>

        </div>

      </section>
    </div>
  );
}

export default App;
