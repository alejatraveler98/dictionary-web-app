import { useState, useEffect } from "react"
import { IconPlay } from "./Icons/IconPlay"


const WordAudio = ({phonetic}) => {
    const useAudio = (url) => {
        let [audio] = useState(new Audio(url))
        const [playing, setPlaying] = useState(false);
        const toggle = () => audio.play();
        // const toggle = () => setPlaying(!playing);
        useEffect(() => {
            playing ? audio.play() : audio.pause();
          },
          [playing]
        );


        return [playing, toggle]
    }

    const [playing,toggle] =  useAudio(phonetic.audio)

    return (
        <div>
            <audio id="word-audio" style={{ display: "none" }} src={phonetic.audio}></audio>
            <div onClick={toggle}>
                <IconPlay/>
            </div>

        </div>
    )
}

export default WordAudio
