import './App.css';
//import NavBar from './components/NavBar'
//import MenuP from './components/MenuP'
import Contenedor from './components/Contenedor'

const Aviso = () => {
  return (
    <h3>Holuuu</h3>
  )
}


function App() {
  return (
    <div className="App">
      <Contenedor lugar={"Coderhouse"}>
        <Aviso />
      </Contenedor>
    </div>
  );
}

export default App;
