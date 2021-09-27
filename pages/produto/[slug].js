import Head from 'next/head';
import Header from '../../src/components/Head/Header';
import Script from 'next/script';
import { getCategories, getFilterProducts } from '../api/dato-cms';
import ProductItem from '../../src/components/Products/Item/ProductItem';
import Footer from '../../src/components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';


export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                slug: ''
            }
        }],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const slug = await getFilterProducts(context.params.slug);
    const categories = await getCategories();

    return {
        props: {
            slug: slug,
            cat: categories
        },
        revalidate: 3600
    }
};

const Product = ({ cat, slug }) => (
    <div>
        <Head>
            {slug.map(item=>(
               <title key={item.title}> {item.title}</title>
            ))}
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header cat={cat} />
            <main className="container-fluid pt-5 pb-5">
                {slug.map(item => (
                    <div key={item.id}>
                        <ProductItem
                            title={item.title}
                            state={item.productState}
                            key={item.id}
                            image={item.featuredImage.url}
                            shortDesc={item.shortDescription}
                            gallery={item.gallery}
                            price={item.preco}
                        />
                    </div>
                ))}
            </main>
            <Footer/>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossOrigin="anonymous"></Script>
    </div>
);


export default Product;