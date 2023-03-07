import React, { useContext } from 'react'
import { WordContext } from '../context/wordsContext'

const WordAntoyms = ({antonyms}) => {
  let { generateId } = useContext(WordContext)
  return (
    <>
    {
        antonyms.length > 0 && (
            antonyms.map((antonym) => (
                <span key={generateId()}>{antonym}</span>
            ))
        )
    }
    </>
  )
}

export default WordAntoyms