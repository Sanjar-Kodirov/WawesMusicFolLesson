import React from 'react'

const LibrarySong = ({currentSong, setCurrentSong, songs}) => {
    function changeSongHandler(){
        // const selectedSong = songs.filter(el => el.id === currentSong.id)
        // setCurrentSong(selectedSong[0])
        setCurrentSong(currentSong)
        console.log(currentSong);
        
    }
    return (
        <div onClick={changeSongHandler} className="library-song-cont">
            <img src={currentSong.cover} alt=""/> 
            <div className="library-song-name">
                <h2>{currentSong.name}</h2>
                <h3>{currentSong.artist}</h3>
            </div> 
        </div>
    )
}

export default LibrarySong
