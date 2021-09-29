import styles from "../../../../styles/Product.module.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductItem(props) {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
            return "NOVO";
        }

        if (state === 'vitrine') {
            return "VITRINE";
        }

        if (state === 'usado') {
            return "USADO";
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="p-2 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="galleryProduct">
                        <div className={styles.imageSingle}>
                            <Slider {...settings}>
                                <div className="card">
                                    <div className="card-wrapper">
                                        <div className="card-image">
                                            <img className={styles.imgSlider} src={props.image} />
                                        </div>
                                    </div>
                                </div>
                                {props.gallery.map(item => (
                                    <div className="card" key={item.id}>
                                        <div className="card-wrapper">
                                            <div className="card-image">
                                                <img src={item.url} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="content-info-single p-4 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className={styles.infoContentSingle}>
                        <h1>{props.title}</h1>
                        <p className="pt-2">{props.shortDesc}</p>
                        <span className={styles.productSinglePrice}>{changePrice(props.price)}</span><br />
                        <span className="pt-5">*Consulte condições de parcelamento pelo WhastApp ou Telefone:</span>
                            <span className="mr-3"><a className="mt-3 btn btn-success" href="#" role="button">Pedir no WhatsApp</a> </span>
                            <span className="pl-2"><a className="mt-3 btn btn-primary" href="#" role="button">Pedir por Ligação</a> </span>
                    </div>
                </div>
            </div>
        </div>
    )


}