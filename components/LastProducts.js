import MensagemWhats from './MensagemWhats';
import { StateNew, StateShowcase, StateUsed } from './StatesProducts';
import Link from 'next/link'


export default function LastProducts(props) {



    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
    ];
    const changePrice = (num) => {
        let preco = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num);
        return preco;
    }

    const productState = (state) => {

        if (state === 'novo') {
            return <StateNew />;
        }

        if (state === 'vitrine') {
            return <StateShowcase />;
        }

        if (state === 'usado') {
            return <StateUsed />;
        }
    }

    return (
        <div className="last-products">
            <h5 className="container text-lg text-center sm:text-left">Acabaram de chegar</h5>
            <div className="container mx-auto text-center p-3">
                        <div className="main-carousel" data-flickity='{ "groupCells": true }'>
                            {props.last.map(item => (
                                <Link href={`/produto/${item.id}`} key={item.id} forceRefreash>
                                    <div className="carousel-cell">
                                        <img src={item.featuredImage.url} />
                                        <p>{item.title}</p>
                                        <div className="product-info">
                                            <span className="product-price">{changePrice(item.preco)}</span>
                                            <span className="product-state">{productState(item.productState)}</span>
                                            </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
            </div>
        </div>
    )
}