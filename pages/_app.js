import '../styles/globals.css';
import '../styles/carousels.css';
import '../styles/listCategories.css';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
