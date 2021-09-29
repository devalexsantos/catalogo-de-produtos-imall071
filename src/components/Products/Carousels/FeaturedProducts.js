import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { New, Showcase, Used } from "../Item/Status";

export default function FeaturedProducts(props) {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const changePrice = (num) => {
        let preco = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num);
        return preco;
    }

    const productState = (state) => {

        if (state === 'novo') {
            return <New />;
        }

        if (state === 'vitrine') {
            return <Showcase />;
        }

        if (state === 'usado') {
            return <Used />;
        }
    }

    return (
        <div className="featured-products">
            <h5 className="text-lg text-center">Produtos em Destaque</h5>
            <div className="container mx-auto text-center pb-5 pt-2">
                <Slider {...settings}>
                    {props.featured.map(item => (
                        <Link href={`/produto/${item.slug}`} key={item.id}>
                        <div className="slider-content">
                            <div className="card-wrapper">
                                
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={item.featuredImage.url} />
                                        </div>
                                        <p className="mt-3">{item.title}</p>
                                        <div className="product-info pb-4 mb-3">
                                            <span className="product-price mb-2 text-center">{changePrice(item.preco)}</span>
                                            {productState(item.productState)}
                                        </div>
                                    </div>
                               
                            </div>
                        </div>
                         </Link>
                    ))}
                </Slider>
            </div>
        </div>
    )
}