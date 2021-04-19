import React,{useState} from 'react';
import Song from './component/Song'
import Player from './component/Player'
import Library from './component/Library'
import './styles/app.scss'
import data from './data'
function App() {

  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  console.log(songs)
  return (
    <div className="App">
      <Library currentSong={currentSong} songs={songs} />
      <Song currentSong={currentSong} />
      <Player 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong} />
    </div>
  );
}

export default App;
