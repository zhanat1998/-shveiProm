import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../components/navbar';
import FirstPage from '../components/firstPage';
import SecondPage from '../components/secondPage/secondPage';
import ThirdPage from '../components/thirdPage';
import FourthPage from '../components/fourthPage';
import FifthPage from '../components/fifthPage';
import SixPage from '../components/sixPage';
import SeventhPage from '../components/seventhPage';
import Footer from '../components/footer';
import Navigation from '../components/navigation';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navigation />
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        {/* <FifthPage /> */}
        {/* <SixPage /> */}
        {/* <SeventhPage /> */}
        {/* <Footer /> */}
      </>
    ),
  },
]);
