import Header from './components/Header'
import Search from './components/Search'
import WordContainer from './components/WordContainer'
import { WordProvider } from './context/wordsContext'
import "./Styles/Styles.scss"
function App() {

  return (
    <WordProvider>
      <div className='l-container'>
        <Header />
        <Search />
        <WordContainer/>
      </div>
    </WordProvider>

  )
}

export default App
