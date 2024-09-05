import { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/asifhasan973/All_jsons/main/book_review.json'
    )
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  }, []);
  return (
    <div>
      {/* banner  */}
      <div className="flex flex-col lg:flex-row bg-[#1313130D] w-11/12 mx-auto mt-12 py-16 rounded-3xl">
        <div className="flex-1 flex items-center flex-col justify-center ms-16">
          <div className="text-center mb-16 lg:mb-0 lg:text-start">
            <h1 className="text-6xl lg:text-8xl font-black">
              Books to freshen up your bookshelf
            </h1>
            <button>
              <a className="btn btn-lg bg-[#23BE0A] text-white mt-10">
                View The List
              </a>
            </button>
          </div>
        </div>
        <div className="flex-1 ">
          <img src="/src/assets/Book_cover.png" alt="" />
        </div>
      </div>

      {/* books  */}
      <div className="my-40 w-11/12 mx-auto">
        <h1 className="text-5xl font-black text-center mb-16">Books</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
