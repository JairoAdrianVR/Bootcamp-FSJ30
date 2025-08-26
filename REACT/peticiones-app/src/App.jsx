import './App.css'
import {ListCharacters } from './components/ListCharacters'
import { FavoritesDataProvider } from './contexts/FavoritesContext'
// Asincronismo -> manejar código que tarda en completarse como solicitudes a un servidor o lecturas de archivos, sin bloquear el resto del programa.
// Promesa -> La esperanza de una posible respuesta a eso que va a tardar
function App() {

  return (
    <> 
    <FavoritesDataProvider>
      <ListCharacters />

    </FavoritesDataProvider>
      <h1>Holiwis</h1>
      <h2>Chauchis</h2>
    </>
  )
}

export default App
