import MensagemWhats from './MensagemWhats';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import { StateNew, StateShowcase, StateUsed } from './StatesProducts';


export default function FeaturedProducts(props) {

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
        <div>



            <h5 className="container">Produtos em Destaque</h5>
            <div className="container mx-auto text-center p-3">
                <div>
                    <div>
                        <Carousel breakPoints={breakPoints}>
                            {props.featured.map(item => (
                                <div class="container">
                                    <div class="max-w-md w-full m-2 bg-gray-900 rounded-xl p-6">
                                        <div class="flex flex-col">
                                            <div class="relative h-62 w-full mb-3">
                                                <div class="absolute flex flex-col top-0 right-0 p-3">
                                                    {productState(item.productState)}
                                                </div>
                                                <img src={item.featuredImage.url} alt="Just a flower" class=" w-full   object-fill  rounded-2xl" />
                                            </div>
                                            <div class="flex-auto justify-evenly">
                                                <div class="flex flex-wrap ">
                                                    <div class="w-full flex-none text-sm flex items-center text-gray-600">
                                                    </div>
                                                    <div class="flex items-center w-full justify-between min-w-0 ">
                                                        <h2 class="text-lg mr-auto cursor-pointer text-gray-200 leading-tight line-clamp-2">
                                                            {item.title}
                                                        </h2>
                                                    </div>

                                                </div>
                                                <div class="text-xl text-white font-semibold mt-1 mb-2">{changePrice(item.preco)}</div>
                                                <div class="flex space-x-2 text-sm font-medium justify-start">
                                                    <MensagemWhats title={item.title} />
                                                    <button class="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                /* <div key={item.id}>
                                    <div>
                                        <img src={item.featuredImage.url} alt="Card image cap" />
                                        <h5>{item.title}</h5>
                                        <p>{changePrice(item.preco)}</p>
                                        <MensagemWhats title={item.title} />
                                    </div>
                                </div> */
                            ))}
                        </Carousel>
                    </div>

                </div>
            </div>
        </div>
    )
}