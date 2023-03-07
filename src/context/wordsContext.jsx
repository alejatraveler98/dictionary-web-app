import { createContext, useState } from "react";
import ErrorNotFound from "../components/ErrorNotFound";
import { fetchWord } from "../services/searchWord";


export const WordContext = createContext();


export const WordProvider = ({ children }) => {
    const [word, setWord] = useState(null)
    const [error, setError] = useState(true)

    const generateId =()=>{
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString()
        return `${random}${fecha}`
    }
    
    const searchWords = async ({ search }) => {
        try {
            const newWord = await fetchWord({ search })
            if(newWord.length > 0) {
                setError(false)
                setWord(null)
            }
            else if(newWord.hasOwnProperty('title')){

                setError(true)
            } 

            
            setWord(newWord);
        } catch (e) {
            setError(e)
        }

    }
    


    return (
        <WordContext.Provider
            value={{
                word,
                setWord,
                searchWords,
                generateId,
                error,
            }}
        >
            {
                children
            }
        </WordContext.Provider>
    )
}



