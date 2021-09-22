import MensagemWhats from './MensagemWhats';
import Carousel from 'react-elastic-carousel';
import { StateNew, StateShowcase, StateUsed } from './StatesProducts';
import Link from 'next/link'


export default function FeaturedProducts(props) {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
    ];

    const settings = {
        arrows: false,
    }

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
        <div className="container pt-8">
            <h5 className="text-lg text-center">Produtos em Destaque</h5>
            <div className="container mx-auto text-center p-3">
                <div>
                    <div>
                        <Carousel breakPoints={breakPoints}>
                            {props.featured.map(item => (
                                <Link href={`/produto/${item.id}`} key={item.id}>
                                <div className="container cursor-pointer">
                                    <div className="max-w-md w-full m-2 bg-white shadow-sm rounded-xl p-6">
                                        <div className="flex flex-col">
                                            <div className="relative h-62 w-full mb-3">
                                                <div className="absolute flex flex-col top-0 right-0 p-3">
                                                    {productState(item.productState)}
                                                </div>
                                                <img src={item.featuredImage.url} alt="Just a flower" className=" w-full   object-fill  rounded-2xl" />
                                            </div>
                                            <div className="flex-auto justify-evenly">
                                                <div className="flex flex-wrap ">
                                                    <div className="w-full flex-none text-sm flex items-center text-gray-600">
                                                    </div>
                                                    <div className="flex items-center w-full justify-between min-w-0 text-center">
                                                        <h2 className="text-lg mr-auto cursor-pointer text-gray-800 leading-tight line-clamp-2">
                                                            {item.title}
                                                        </h2>
                                                    </div>

                                                </div>
                                                <div className="text-xl text-gray-800 font-semibold mt-1 mb-2">{changePrice(item.preco)}</div>
                                                <div className="flex flex-wrap justify-center space-x-2 text-sm font-medium justify-start">
                                                    <MensagemWhats title={item.title} />
                                                    <button className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-100 rounded-full w-9 h-9 text-center p-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            ))}
                        </Carousel>
                    </div>

                </div>
            </div>
        </div>
    )
}