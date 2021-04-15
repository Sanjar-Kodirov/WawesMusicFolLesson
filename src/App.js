import react,{useState} from 'react';
import Song from './component/Song'
import Player from './component/Player'
import './styles/app.scss'
import data from './data'
function App() {

  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  console.log(songs)
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
