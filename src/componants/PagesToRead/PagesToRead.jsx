import { useLoaderData } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

const PagesToRead = () => {
  const allBooksObj = JSON.parse(useLoaderData());
  const allBooks = allBooksObj.books;
  const wish = JSON.parse(localStorage.getItem('wish')) || [];
  const data = [];

  allBooks.map((book) => {
    if (wish.includes(book.bookId)) {
      data.push(book);
    }
  });

  console.log(data);

  return (
    <div className="flex justify-center items-center h-[800px]">
      <BarChart width={1100} height={400} data={data}>
        <XAxis dataKey="bookName" className="font-semibold bg-gray-600" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#ccc' }} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: '#f5f5f5',
          }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5" />
        <Bar dataKey="totalPages" fill="#808080" barSize={30} />
      </BarChart>
    </div>
  );
};

export default PagesToRead;
