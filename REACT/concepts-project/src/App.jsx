import './App.css'
import Saludo from './components/Saludo'


function App() {

  return (
    <> {/* Este es el fragment -> NO DIBUJA UN CONTENEDOR EN EL HTML */}

      <h1>Holiwis</h1>

      {/* Este es el primer componente jaja saludos */}
      <Saludo nombre='Jairo' />
      <Saludo nombre='Jose' />
      <Saludo nombre='Jorge' />
      <Saludo nombre='Mayerli' />
    </>
  )
}

export default App
