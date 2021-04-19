import React from 'react'

const LibrarySong = ({currentSong}) => {
    return (
        <div className="library-song-cont">
            <img src={currentSong.cover} alt=""/> 
            <div className="library-song-name">
                <h2>{currentSong.name}</h2>
                <h3>{currentSong.artist}</h3>
            </div> 
        </div>
    )
}

export default LibrarySong
