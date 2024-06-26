// import style from './HomePage.module.css';

import { Helmet } from 'react-helmet-async';
import Home from '../../components/Home/Home';

const HomePage = () => {

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Home />
    </>
  );
};

export default HomePage;
