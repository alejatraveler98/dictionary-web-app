import { useContext } from "react"
import { WordContext } from "../context/wordsContext"
import WordExample from "./WordExample"

const WordDefinitions = ({definitions }) => {
  let { generateId } = useContext(WordContext)
  return (
    <div>
      {
        definitions.length > 0 &&
        <div>
          <h2 className="title">Meaning</h2>
          <ul className="definition-list">
            {
              definitions.map((defintion) => (
                <div key={generateId()}>
                  <li key={generateId()}>
                    {
                      defintion.definition
                    }
                  </li>
                  {
                    
                    defintion?.example != null &&
                    <WordExample key={generateId()} wordExample={defintion.example}/>
                  }
                  
                </div>
              ))
            }
          </ul>
        </div>
      }
    </div>
  )
}

export default WordDefinitions