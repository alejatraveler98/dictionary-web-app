import WordMeaning from "./WordMeaning"
import { IconPlay } from "./Icons/IconPlay"
import { useState } from "react"
import WordAudio from "./WordAudio"


const Word = (dataWord) => {
  console.log('dataWord',dataWord);
  let { word, phonetic, phonetics, sourceUrls, meanings } = dataWord.data
  let firstPhonetic = phonetics.find(phonetic => phonetic?.audio.length > 0)
    
  return (
    <div>

      <div className="word">
        <div>
          <h2 className="title">{word}</h2>
          <p className="phonetic">{phonetic}</p>
        </div>
        <div>
          {
            <WordAudio phonetic={firstPhonetic}/>
          }
        </div>
      </div>

      <WordMeaning meanings={meanings} />

      <div className="word-source">
        {
          sourceUrls.map((source,index)=>(
            <span key={index}>{source}</span>
          ))
        }
      </div>
    </div>
  )
}

export default Word