import './App.css';
import Texto from './components/Texto';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Ejemplo</h2>
        <Texto nombre="Rigoberta Menchu" />
        <Texto nombre="Pablo Forlán" />
        <Texto nombre="Morro García" />
      </header>
    </div>
  );
};

export default App;
