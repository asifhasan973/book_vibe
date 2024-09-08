import PropTypes from 'prop-types';
const DisplayBooks = ({ displayBooks }) => {
  return (
    <div className="space-y-10 w-10/12 mx-auto mt-6">
      {displayBooks.map((book) => (
        <div key={book.bookId} className="card lg:card-side border">
          <figure className="w-[250px] p-10 bg-[#13131326]">
            <img src={book.image} alt="Album" />
          </figure>
          <div className="card-body justify-between">
            <div>
              <h2 className="card-title text-2xl mb-5">{book.bookName}</h2>
              <p className="text-gray-500">By: {book.author}</p>
            </div>
            <div className="flex gap-5  text-lg items-center">
              <h1 className="font-black">Tag: </h1>
              {book.tags.map((dt, idx) => (
                <div
                  className=" font-semibold badge px-5 py-3 bg-[#23BE0A0D] text-[#23BE0A] "
                  key={idx}
                >
                  #{dt}
                </div>
              ))}
              <p className="text-gray-500">
                Year of Publishing: {book.yearOfPublishing}
              </p>
            </div>
            <div className="flex font-bold">
              <p className="text-gray-500">Publisher: {book.publisher}</p>
              <p className="text-gray-500">Page: {book.totalPages}</p>
            </div>
            <hr />
            <div className="card-actions">
              <button className="badge px-6 py-4 text-lg bg-[#328EFF26] text-[#328EFF] border-[#328EFF]">
                Category: {book.category}
              </button>
              <button className="badge px-6 py-4 text-lg bg-[#FFAC3326] text-[#FFAC33] border-[#FFAC33]">
                Rating: {book.rating}
              </button>
              <button className="badge px-6 py-4 text-lg bg-[#23BE0A] text-white">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

DisplayBooks.propTypes = {
  displayBooks: PropTypes.array,
};
export default DisplayBooks;
