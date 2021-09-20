import Head from 'next/head';
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import Header from './components/Header';
import Navbar from './components/Navbar';
import FeaturedProducts from './components/FeaturedProducts';
import LastProducts from './components/LastProducts';
import { getFeaturedProducts, getLastProducts } from './dato-cms';
import styled from 'styled-components';

const Home = ({featured, last}) => (
    <>
      <Head>
        <title>iMall 071</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="container">
      <FeaturedProducts featured={featured} />
      <LastProducts last={last} />
      </main>

      <footer>
        <span>iMall071</span>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossOrigin="anonymous"></script>
    </>
  );

  Home.getInitialProps = async () =>{
    const featuredProducts = await getFeaturedProducts();
    const lastProducts = await getLastProducts();

    return {
      featured: featuredProducts,
      last: lastProducts
    }
  };

  export default Home;
