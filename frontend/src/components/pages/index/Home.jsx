import React, { useEffect, useState } from "react";
import Header from '../../common/Header'
import { sendRequest } from "../../Core/config/request";
import BookCard from "../../BookCard/BookCard";

const Home = () => {
  const [books, setBooks] = useState({list: []});

  const fetchBooks = async () => {
		try {
			const response = await sendRequest({
				method: "GET",
				route: "/books/",
			});


      setBooks((prevBooks) => ({
        ...prevBooks,
        list: response,
      }));
      console.log(response)
		} catch (e) {
			console.log(e);
		} 
	};
	useEffect(() => {
		fetchBooks();
	}, []);



  return (
    <>
        <Header name1="Home" href1= "/index" name2="Add Book" href2="/add" name3="Logout"/>
        <div className="bookContainer">
        <div className='content grid3'>
        {books.list.map((book) => {
							return <BookCard key={book._id} book={book}/>;
				})}
        </div>

        </div>
    </>
  )
}

export default Home
