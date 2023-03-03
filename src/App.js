import { useEffect, useState, useMemo } from 'react'
//import axios from 'axios'
import './App.css';
import Header from './components/Header'
import BooksGrid from './components/BooksGrid'


function App() {

  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [topic, setTopic] = useState('')
  const [prev, setPrev] = useState('')
  const [next, setNext] = useState('')
  const [query, setQuery] = useState("")


  //fetch books, fetch for selected category
  function setNewTopic(e) {
    setTopic(e.target.value)
  }

  useEffect(() => {
    fetchBooks()
  }, [topic])


  const fetchBooks = async () => {
    setIsLoading(true)
    const response = await fetch(`https://gutendex.com/books/?topic=${topic}`);
    const data = await response.json();
    setBooks(data.results)
    setPrev(data.previous)
    setNext(data.next)
    setIsLoading(false)
    console.log(prev)
  }

  //fetch for pagination
  const prevPage = async (e) => {
    if (prev != null) {
      e.preventDefault()
      setIsLoading(true)
      const response = await fetch(prev);
      const data = await response.json();
      setBooks(data.results)
      setPrev(data.previous)
      setNext(data.next)
      setIsLoading(false)
    }
  }
  const nextPage = async (e) => {
    if (next != null) {
      e.preventDefault()
      setIsLoading(true)
      const response = await fetch(next);
      const data = await response.json();
      //console.log(data)
      setBooks(data.results)
      setPrev(data.previous)
      setNext(data.next)
      setIsLoading(false)
    }
  }

  //filter
  const setQueryValue = (e) => {
    setQuery(e.target.value)
  }

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      return book.title.toLowerCase().includes(query.toLowerCase())
    })
  }, [books, query])

  //

  return (
    <div className="App" >
      <div className="container">
        <Header
          setNewTopic={setNewTopic}
          prevPage={prevPage}
          nextPage={nextPage}
          query={query}
          setQueryValue={setQueryValue}
        />
        <BooksGrid
          isLoading={isLoading}
          books={books}
          filteredBooks={filteredBooks} />
      </div>
    </div>
  );
}

export default App;
