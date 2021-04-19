import React from 'react'
import LibrarySong from './LibrarySong'
const Library = ({currentSong,songs}) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-song">
                {
                    songs.map(el => {
                        return (
                             <LibrarySong currentSong={el} />
                        )
                    })
                }
               >
            </div>
        </div>
    )
}

export default Library
