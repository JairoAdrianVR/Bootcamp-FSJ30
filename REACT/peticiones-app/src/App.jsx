import './App.css'
import {ListCharacters } from './views/listCharacters/ListCharacters'
import { FavoritesDataProvider } from './contexts/FavoritesContext'
import {BrowserRouter, Route, Routes} from 'react-router'
// Asincronismo -> manejar código que tarda en completarse como solicitudes a un servidor o lecturas de archivos, sin bloquear el resto del programa.
// Promesa -> La esperanza de una posible respuesta a eso que va a tardar
function App() {

  return (
    <> 
    <FavoritesDataProvider>
      {/* Activamos React Router */ }
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListCharacters />}/>

        </Routes>
      </BrowserRouter>

    </FavoritesDataProvider>
    </>
  )
}

export default App
