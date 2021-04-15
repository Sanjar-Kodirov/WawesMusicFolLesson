import React, {useRef} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
const Player = ({currentSong, setIsPlaying, isPlaying}) => {
    const audioRef = useRef(0)
    const handlerClick = () => {
        setIsPlaying(!isPlaying)
        if(isPlaying){
            audioRef.current.pause()
        }else{
            audioRef.current.play()
        }
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>Start time:</p>
                <input type="range"/>
                <p>End time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={handlerClick} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
            <audio ref={audioRef}  src={currentSong.audio}></audio>
        </div>
    )
}

export default Player
