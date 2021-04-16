import React, {useRef, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
const Player = ({currentSong, setIsPlaying, isPlaying}) => {
    const audioRef = useRef(0)
    const handlerClick = () => {
        setIsPlaying(!isPlaying)
        if(isPlaying){
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        }else{
            audioRef.current.play()
        }
    }
    function time_convert(num){ 
        let hours = Math.floor(num / 60);  
        let minutes = num % 60;
        let floorMinute = Math.floor(minutes)
        return hours + ":" + floorMinute;         
    }
    const timeUpdateHandler = (e) => {
        let current = e.target.currentTime;
        let duration = e.target.duration;
        console.log(current, duration)
        setSongInfo({...songInfo, currentTime: current, duration: duration})
    }
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    });
    return (
        <div className="player">
            <div className="time-control">
                <p>{time_convert(songInfo.currentTime)}</p>
                <input type="range"/>
                <p>{time_convert(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={handlerClick}  className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
            <audio 
                onTimeUpdate={timeUpdateHandler} 
                
                ref={audioRef}  
                src={currentSong.audio}></audio>
        </div>
    )
}

export default Player
