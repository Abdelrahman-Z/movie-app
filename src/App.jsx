import Header from "./components/Header"
import {Route , Routes} from 'react-router-dom'
import FilmSearcher from "./pages/FilmSearcher"
import WatchList from "./pages/WatchList"
import WatchedList from "./pages/WatchedList"
import FilmDetails from "./pages/FilmDetails"
import Footer from "./components/Footer"
function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<FilmSearcher/>}></Route>
        <Route path="/watch-list" element={<WatchList/>}></Route>
        <Route path="/watched" element={<WatchedList/>}></Route>
        <Route path="/film/:details" element={<FilmDetails/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
