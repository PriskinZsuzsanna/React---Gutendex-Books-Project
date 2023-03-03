import React from 'react'
import BookItem from './BookItem'


const BooksGrid = ({ isLoading, books, filteredBooks }) => {
  if (isLoading) return (<h2>Loading...</h2>)
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
