import { useState } from 'react';
import './App.css';

function App() {
  const [teendok, setTeendok] = useState([]);
  const [feladat, setFeladat] = useState("");

  const feladatHozzaadasa = () => {
    if (feladat != "") {
      if (teendok.includes(feladat)) {
        alert("A feladat már szerepel a teendők között!");
      } else {
        const bejegyzes = {
          feladat: feladat
        };
        const ujTeendok = [];
        teendok.forEach(bejegyzes => ujTeendok.push(bejegyzes))
        ujTeendok.push(bejegyzes);
        setTeendok(ujTeendok);
      }
    } else {
      alert("Nincs megadva feladat!");
    }
  };

  const teendoLista = [];
  teendok.forEach(bejegyzes => {
    teendoLista.push(
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="checkbox" />
        {bejegyzes.feladat}
      </div>
    )
  });

  return (
    <main>
      <h1>Teendők</h1>
      <section>
        <h2>Feladat hozzáadása</h2>
        <div>
          <label>Feladat:</label>
        </div>
        <div>
          <input
            id="text-feladat"
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
        {teendoLista}
      </section>
    </main>
  );
}

export default App;
