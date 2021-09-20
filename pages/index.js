import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import FeaturedProducts from '../components/FeaturedProducts';
import LastProducts from '../components/LastProducts';
import { getFeaturedProducts, getLastProducts } from '../components/dato-cms';
import Script from 'next/script'

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
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossOrigin="anonymous"></Script>
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
