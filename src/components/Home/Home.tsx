import React from 'react';
import Header from './Header';
import './index.less';
import Footer from './Footer';
import Main from './Main';
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
