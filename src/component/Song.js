import React from 'react'

const Song = ({currentSong, libraryStatus, setLibraryStatus}) => {
    function libraryStatusHandler(){
        setLibraryStatus(!libraryStatus)
    }
    return (
        <div>
            <nav>
                <h1>Nav Music</h1>
                <button onClick={libraryStatusHandler}>Library</button>
            </nav>
            <div className="song-container">
                <img src={currentSong.cover} alt=""/> 
                <h2>{currentSong.name}</h2>
                <h3>{currentSong.artist}</h3>
            </div>
        </div>
    )
}

export default Song
