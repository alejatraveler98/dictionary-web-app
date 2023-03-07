import { useContext } from "react"
import { WordContext } from "../context/wordsContext"
import WordAntoyms from "./WordAntoyms"
import WordDefinitions from "./WordDefinitions"
import WordExample from "./WordExample"
import WordSynonyms from "./WordSynonyms"

const WordMeaning = (meanings) => {
    
    let { generateId } = useContext(WordContext)
    

    return (
        <div key={generateId()} className="word-meaning">
            {
                meanings.meanings.map((meaning) => (
                    
                    <div key={generateId()}>    
                    
                        <p key={generateId()} className="word-partOfSpeech"> {meaning.partOfSpeech}</p>
                        <WordDefinitions key={generateId()} definitions={meaning.definitions} />
                        <WordSynonyms key={generateId()} synonyms={meaning.synonyms} />
                        <WordAntoyms key={generateId()} antonyms={meaning.antonyms} /> 

                    </div>

                ))
            }
        </div>
    )
}

export default WordMeaning