
import './App.css';
import {Route, Routes} from 'react-router-dom'
import FossilList from './pages/FossilList/FossilList';
import VillagerList from './pages/VIllagerList/VillagerList';
import SongList from './pages/SongList/SongList';

function App() {
  return (
    <>
    <h1>Sanity Check</h1>
    <a href='/fossils'>To the fossils!</a><br/>
    <a href='/villagers'>Villager List!</a><br/>
    <a href='/songs'>Dat music</a>
    <Routes>
      <Route path='/fossils' element={<FossilList />} />
      <Route path='/villagers' element={<VillagerList />} />
      <Route path='/songs' element={<SongList />} />
    </Routes>
    </>
  );
}

export default App;
