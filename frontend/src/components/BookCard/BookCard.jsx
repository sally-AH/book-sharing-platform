import React from 'react'

const BookCard = (book) => {
    console.log(book)
  return (
    <>
      <section className='books'>
        <div className="container">
            <div className="box">
                <img src={book.book.picture} alt="pic" />
                {/* <img src="https://picsum.photos/200" alt="pic" /> */}
                <h3>Title: {book.book.name}</h3>
                <h5>Author: {book.book.author}</h5>
                <p>Review: {book.book.review}</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default BookCard
