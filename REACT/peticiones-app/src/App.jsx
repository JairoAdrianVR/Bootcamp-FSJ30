import './App.css'
import {ListCharacters } from './components/ListCharacters'
// Asincronismo -> manejar código que tarda en completarse como solicitudes a un servidor o lecturas de archivos, sin bloquear el resto del programa.
// Promesa -> La esperanza de una posible respuesta a eso que va a tardar
function App() {

  return (
    <> 
      <h1>Holiwis</h1>
      <h2>Chauchis</h2>
      <ListCharacters />
    </>
  )
}

export default App
