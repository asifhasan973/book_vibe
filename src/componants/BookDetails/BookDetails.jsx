import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
  const book = useLoaderData();
  const {
    // bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    yearOfPublishing,
    publisher,
    totalPages,
  } = book;

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-16 w-11/12 mx-auto my-20">
      <div className="flex-1 flex justify-center items-center py-20 rounded-2xl bg-[#1313130D]">
        <img src={image} alt="" className="w-3/4 lg:w-2/4 " />
      </div>
      <div className="flex-1 flex flex-col justify-around">
        <div>
          <h1 className="text-5xl font-black">{bookName}</h1>
          <p className="text-xl my-5">By: {author}</p>
          <hr />
          <h4 className="text-xl my-5 font-semibold">{category}</h4>
          <hr />
          <p className="text-[#131313B3] mt-8 mb-6">
            <span className="font-black  text-black">Review: </span>
            {review}
          </p>
        </div>
        <div className="flex gap-5 mb-10 text-lg items-center">
          <h1 className="font-black">Tag: </h1>
          {tags.map((dt, idx) => (
            <div
              className=" font-semibold badge px-5 py-3 bg-[#23BE0A0D] text-[#23BE0A] "
              key={idx}
            >
              #{dt}
            </div>
          ))}
        </div>
        <hr />
        <div className="mt-8">
          <table className="table border-0 w-7/12">
            <tbody className="">
              <tr className=" border-0">
                <td className="text-[#131313B3] ms-10 border-0">
                  Number of Pages:
                </td>
                <td className="font-semibold border-0">{totalPages}</td>
              </tr>
              <tr className=" border-0">
                <td className="text-[#131313B3] ms-10 border-0">Publisher:</td>
                <td className="font-semibold border-0">{publisher}</td>
              </tr>
              <tr className=" border-0">
                <td className="text-[#131313B3] ms-10 border-0">
                  Year of Publishing:
                </td>
                <td className="font-semibold border-0">{yearOfPublishing}</td>
              </tr>
              <tr className=" border-0">
                <td className="text-[#131313B3] ms-10 border-0">Rating:</td>
                <td className="font-semibold border-0">{rating}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 mb-3 ms-3">
          <a className="btn btn-lg  py-3 inline btn-ghost text-[#23BE0A] border-[#23BE0A] text-white me-4">
            Read
          </a>
          <a className="btn btn-lg  py-3 inline  bg-[#59C6D2] text-white">
            Wishlist
          </a>
        </div>
      </div>
    </div>
  );
};

BookDetails.propTypes = {
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

export default BookDetails;
