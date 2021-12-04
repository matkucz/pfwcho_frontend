import React, { useState } from "react";
import './App.css';

function App() {
  const [n, setN] = useState(1);
  const [fibVal, setFibVal] = useState(0);

  const handleChange = (e) => {
    setN(e.target.value);
  }

  const fibonacci = (num, tab) => {
    // wykorzystaj pusty gotowy obiekt
    // lub stworz pusty
    tab = tab || {};
    if (tab[num])
      return tab[num];
    if (num <= 1)
      return 1;
    return tab[num] = fibonacci(num - 1, tab) + fibonacci(num - 2, tab);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Program do obliczania n-tego elementu ciągu Fibonacciego.
        </p>
          <label htmlFor="num">Który element ciągu obliczyć?</label>
          <input placeholder="Wprowadź liczbę naturalną dodatnią" className="App-input" type="number" id="num" value={n} onChange={handleChange}></input>
          <button className="App-button" onClick={ () => setFibVal(n > 0 ? fibonacci(n, {}) : 0) }>Oblicz wartość</button>
        <p>
          Wartość ciągu dla n={ n } wyniosła { fibVal }
        </p>
      </header>
    </div>
  );
}

export default App;
