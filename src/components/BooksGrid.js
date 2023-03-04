import React from 'react'
import BookItem from './BookItem'
import Spinner from './Spinner'


const BooksGrid = ({ isLoading, books, filteredBooks }) => {
  if (isLoading) return (<Spinner/>)
  return (
    <section className='cards'>
      
      {filteredBooks.map((book) => (
        <BookItem
          key={book.id}
          book={book}>
        </BookItem>
      ))}
    </section>

  )
}

export default BooksGrid
