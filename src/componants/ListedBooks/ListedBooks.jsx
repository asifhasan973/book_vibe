import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayBooks from '../DisplayBooks/DisplayBooks';
import { FaAngleDown } from 'react-icons/fa6';

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishBooks, setWishBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [dataOfDisplay, setDataOfDisplay] = useState([]);

  const read = JSON.parse(localStorage.getItem('read')) || [];
  const wish = JSON.parse(localStorage.getItem('wish')) || [];

  const allBooksObj = JSON.parse(useLoaderData());
  const allBooks = allBooksObj.books;

  useEffect(() => {
    const newArray = [];
    const newArray2 = [];
    allBooks.map((book) => {
      if (read.includes(book.bookId)) {
        newArray.push(book);
      }
      if (wish.includes(book.bookId)) {
        newArray2.push(book);
      }
    });

    setReadBooks(newArray);
    setWishBooks(newArray2);
    setDisplayBooks(newArray);
    setDataOfDisplay(newArray);
  }, []);

  const handleSetBooks = (books) => {
    setDisplayBooks(books);
  };

  const handleRating = (dataOfDisplay) => {
    const sortedBooks = [...dataOfDisplay].sort((a, b) => a.rating - b.rating);
    setDisplayBooks(sortedBooks);
  };

  const handleYear = (dataOfDisplay) => {
    const sortedBooks = [...dataOfDisplay].sort(
      (a, b) => a.yearOfPublishing - b.yearOfPublishing
    );
    setDisplayBooks(sortedBooks);
  };
  const handlePages = (dataOfDisplay) => {
    const sortedBooks = [...dataOfDisplay].sort(
      (a, b) => a.totalPages - b.totalPages
    );
    setDisplayBooks(sortedBooks);
  };

  return (
    <div>
      <div>
        <h1 className="bg-[#1313130D] rounded-3xl w-11/12 mx-auto py-10 font-black text-4xl text-center mt-10">
          Books
        </h1>
        <div className="flex justify-center mt-10">
          <details className="dropdown ">
            <summary className="btn m-1 bg-[#23BE0A] text-white">
              Sort By <FaAngleDown />
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <a onClick={() => handleYear(dataOfDisplay)}>
                  By Publishing Year
                </a>
              </li>
              <li>
                <a onClick={() => handleRating(dataOfDisplay)}>By Rating</a>
              </li>
              <li>
                <a onClick={() => handlePages(dataOfDisplay)}>By Pages</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div
        role="tablist"
        className="tabs tabs-lg tabs-lifted mt-16 w-11/12 mx-auto"
      >
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab font-black"
          aria-label="Read Books"
          defaultChecked
          onClick={() => {
            handleSetBooks(readBooks);
            setDataOfDisplay(readBooks);
          }}
        />
        <div
          role="tabpanel"
          className="tab-content border-0 bg-base-100 border-base-300 rounded-box p-6"
        >
          <DisplayBooks displayBooks={displayBooks}></DisplayBooks>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab font-black"
          aria-label="Wishlist Books"
          onClick={() => {
            handleSetBooks(wishBooks), setDataOfDisplay(wishBooks);
          }}
        />
        <div
          role="tabpanel"
          className="tab-content border-0 bg-base-100 border-base-300 rounded-box p-6"
        >
          <DisplayBooks displayBooks={displayBooks}></DisplayBooks>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
