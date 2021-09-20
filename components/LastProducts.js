import styles from '../pages/assets/css/main.module.css';
import MensagemWhats from './MensagemWhats';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';

export default function LastProducts(props) {

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 900, itemsToShow: 4},
    ];

        const changePrice = (num) => {
            let preco = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(num);
            return preco;
        }

        return(
        <div className={styles.containerLast}>
            <h5 className="container">Acabaram de chegar:</h5>
            <div className="container mx-auto text-center p-3">
                <div className={styles.listItems}>
                    <div className={styles.containerProducts}>
                    <Carousel breakPoints={breakPoints}>
                        {props.last.map(item=>(
                            <div className={styles.thumbProducts} key={item.id}>
                                <div className={styles.cards}>
                                    <img className={styles.imageFeatured} src={item.featuredImage.url} alt="Card image cap" />
                                    <h5>{item.title}</h5>
                                    <p>{changePrice(item.preco)}</p>
                                    <MensagemWhats title={item.title}/>
                                </div>
                            </div>
                        ))}
                    </Carousel>    
                    </div>
                    
                
                </div>
            </div>
        </div>
        )
}