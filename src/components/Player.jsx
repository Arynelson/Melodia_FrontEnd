import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep, faCirclePause
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useRef, useState , useEffect } from "react";

const formatTime = (timeinSeconds) => {
  const minutes = Math.floor(timeinSeconds / 60).toString().padStart(2, '0');
  const seconds = Math.floor(timeinSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};
const timeinSeconds = (timeString) => {
  const splitArray = timeString.split(':');
  const minutes = parseInt(splitArray[0]);  
  const seconds = parseInt(splitArray[1]);
  return minutes * 60 + seconds;
}

const Player = ({ duration, randomIdFromArtist, randomId2FromArtist, audio }) => {
  
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeinSeconds(duration);
  
  useEffect(() => {
    const intervalID = setInterval(() => {
      if(isPlaying)
      setCurrentTime(formatTime(audioPlayer.current.currentTime));

      progressBar.current.style.width = `${(audioPlayer.current.currentTime / durationInSeconds) * 100}%`;
     
    }, 1000);
    return () => { clearInterval(intervalID); };
  }, [isPlaying, durationInSeconds]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => { isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
            setIsPlaying(!isPlaying);
            setCurrentTime(formatTime(audioPlayer.current.currentTime));
          }}
        />

        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

Player.propTypes = {
  duration: PropTypes.string.isRequired,
  randomIdFromArtist: PropTypes.string.isRequired,
  randomId2FromArtist: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
};

export default Player;

