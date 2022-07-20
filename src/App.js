
import './App.css';
import logo from './images/logo.png'
import Boton from './components/Button.jsx'
import Counter from './components/Counter.jsx'
import {useState} from 'react'


function App() {
  const [clicNumber, setNumber] = useState(0)
  const clicManage = () => {
    setNumber(clicNumber+1)
  }

  const restart = () => {
    setNumber(0)
  }
  return (
    <div className="App" >
    <div className='logo-contenedor' >


      <div className='contenedor-principal' >
        <Counter numClics={clicNumber} />
        <Boton 
          texto='Clic'
          isclicButton={true}
          clicManage={clicManage}
        />
        <Boton 
          texto='Restart'
          isclicButton={false}
          clicManage={restart} />
      </div>
    </div>
    </div>
  );
}

export default App;
