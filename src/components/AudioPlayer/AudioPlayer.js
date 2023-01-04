import React, { useState, useEffect } from "react";
import "./AudioPlayer.scss"

const useAudio = (audio) => {

    const [audioToPlay] = useState(new Audio(audio));
    const [playing, setPlaying] = useState(false);
   
    const toggle = () => {
        console.log("toggle")
        setPlaying(!playing);
    }

    useEffect(() => {
        playing ? audioToPlay.play() : audioToPlay.pause();
    },
        [playing]
    );

    useEffect(() => {
        audioToPlay.addEventListener('ended', () => setPlaying(false));
        return () => {
          audioToPlay.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
}

const AudioPlayer = ({audio}) => {
    const [playing, toggle] = useAudio(audio);

    const svg = playing ? 
    <svg className="audio-player__svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256s114.6 256 256 256zm-32-320v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"></path></svg>
    :
    <svg className="audio-player__svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="none" d="M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1.001 1.001 0 0 1 11 23Z"></path><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm7.447 14.895l-12 6A1 1 0 0 1 10 22V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788Z"></path></svg>

    return (
        <button className="audio-player" onClick={toggle}>
            {svg}
        </button>
    )
}

export default AudioPlayer;