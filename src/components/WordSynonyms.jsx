import React, { useContext } from 'react'
import { WordContext } from '../context/wordsContext'

const WordSynonyms = ({ synonyms }) => {
  let { generateId } = useContext(WordContext)
  return (
    <>
      {
      synonyms.length > 0 && 
        <div className='word-synonym-container'>
          <h2 className='title-synonym'>Synonyms</h2>
          {
                synonyms.map(synonym => (
                  <span key={generateId()} className='word-synonyms-results'>
                    {synonym}
                  </span>
                ))
          }
        </div>
      
      }
    </>

  )
}

export default WordSynonyms