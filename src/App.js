import './App.css';

const App = () => {
  const nombre = 'Rigoberta';
  const apellido = 'Menchu';

  return (
    <div className="App">
      <header className="App-header">
        <h2>Ejemplo</h2>
        <h3>
          {nombre} {apellido}
        </h3>
      </header>
    </div>
  );
};

export default App;
