import { useContext } from "react"
import { WordContext } from "../context/wordsContext"
import ErrorNotFound from "./ErrorNotFound";
import Word from "./Word";

const WordContainer = () => {
  let { word, error } = useContext(WordContext);
  return (
    <>
      {
        error ? (
          Object(word).hasOwnProperty('title') &&
          <ErrorNotFound />
        )
          : <Word data={word[0]} />

      }
    </>
  )
}

export default WordContainer