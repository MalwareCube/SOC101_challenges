import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.location.href = 'https://academy.tcm-sec.com';
  }, []);

  return null;
};

export default Home;
