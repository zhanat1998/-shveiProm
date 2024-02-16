import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../components/navbar';
import FirstPage from '../components/firstPage';
import SecondPage from '../components/secondPage/secondPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <FirstPage />
        <SecondPage />
      </>
    ),
  },
]);
