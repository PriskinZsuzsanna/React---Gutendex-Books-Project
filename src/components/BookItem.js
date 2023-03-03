import React from 'react'

const BookItem = ({ book }) => {
  return (

    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={book.formats["image/jpeg"]} alt={book.title} />
        </div>
        <div className="card-front-after">
          <button><i class="fa-solid fa-book-open"></i></button>
        </div>
        <div className='card-back'>
          <h2>{book.title}</h2>

          {book.authors.map(author => (
            <h3>{author.name}</h3>

          ))}


          <div className="formats-div">
            <p className='formats'>
              Formats:
            </p>
            <p className='sublist'>
              <span><a href={book.formats["text/plain"]} target="_blank" rel="noreferrer">txt</a></span>
              <span><a href={book.formats["application/epub+zip"]} target="_blank" rel="noreferrer">epub</a></span>
              <span><a href={book.formats["application/octet-stream"]} target="_blank" rel="noreferrer">zip</a></span>
            </p>
          </div>



        </div>
      </div>
    </div>

  )
}

export default BookItem
