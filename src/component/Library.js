import React from 'react'
import LibrarySong from './LibrarySong'
const Library = ({songs, setCurrentSong, libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}` }>
            <h2>Library</h2>
            <div className="library-song">
                {
                    songs.map(el => {
                        return (
                             <LibrarySong key={el.id}  songs={songs} setCurrentSong={setCurrentSong} currentSong={el} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Library
