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
  const [libraryStatus, setLibraryStatus] = useState(false)
  return (
    <div className="App">
      <Library 
        setCurrentSong={setCurrentSong}
        currentSong={currentSong} 
        libraryStatus={libraryStatus}
        songs={songs} />
      <Song 
          currentSong={currentSong}
          setLibraryStatus={setLibraryStatus}
          libraryStatus={libraryStatus} />
      <Player 
        songs={songs}
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        setCurrentSong={setCurrentSong}
        currentSong={currentSong} />
    </div>
  );
}

export default App;
