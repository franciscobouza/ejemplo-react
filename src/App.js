import React, { useState } from 'react';
import './App.css';
import Texto from './components/Texto';

const App = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);

  const vecPersonas = [
    'Rigoberta Menchu',
    'Pablo Forlán',
    'Morro García',
    'Pablo Bengoechea',
    'Luis Suárez',
    'Lucas Olaza',
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h2>Ejemplo</h2>
      </header>
      {vecPersonas.map((elem, index) => (
        <Texto key={index} pos={index + 1} nombre={elem} contador={contador} />
      ))}

      <input type="button" value="Click" onClick={incrementar} />
    </div>
  );
};

export default App;
