import PropTypes from 'prop-types';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card border pt-4 px-4">
        <figure className="p-8 bg-[#F3F3F3] rounded-2xl">
          <img src={image} alt="Shoes" className=" h-[300px]" />
        </figure>
        <div className="card-body ">
          <div className="flex gap-5 mb-4">
            {tags.map((dt, idx) => (
              <div
                className="badge px-4 py-3 bg-[#23BE0A0D] text-[#23BE0A] font-semibold"
                key={idx}
              >
                {dt}
              </div>
            ))}
          </div>
          <h2 className="card-title text-2xl">{bookName}</h2>
          <p>By: {author}</p>
          <hr className="my-5" />
          <div className="card-actions flex justify-between">
            <h1 className="text-lg font-semibold">{category}</h1>
            <h1 className="text-lg font-semibold flex items-center gap-3">
              {rating} <FaRegStar className="text-xl" />
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    bookName: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Book;
