import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './componants/Root/Root.jsx';
import Home from './componants/Home/Home.jsx';
import ListedBooks from './componants/ListedBooks/ListedBooks.jsx';
import PagesToRead from './componants/PagesToRead/PagesToRead.jsx';
import BookDetails from './componants/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },

      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () =>
          fetch(
            'https://raw.githubusercontent.com/asifhasan973/All_jsons/main/book_review.json'
          ),
      },
      {
        path: '/pagesToRead',
        element: <PagesToRead></PagesToRead>,
        loader: () =>
          fetch(
            'https://raw.githubusercontent.com/asifhasan973/All_jsons/main/book_review.json'
          ),
      },
      {
        path: '/bookDetails/:id',
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(
            `https://raw.githubusercontent.com/asifhasan973/All_jsons/main/book_review_${params.id}.json`
          ).then((res) => res.json()),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
