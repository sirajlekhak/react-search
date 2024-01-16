import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { SearchResultsList } from './components/SearchResultsList';


function App() {
const [results, setResults] = useState([]);

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="search-bar-conatiner">
        <SearchBar setResults={setResults}/>
        <SearchResultsList results={results} />
      </div>
    </div>
  )
}

export default App
