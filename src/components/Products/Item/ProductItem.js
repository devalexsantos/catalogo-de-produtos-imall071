import styles from "../../../../styles/Product.module.css";
export default function ProductItem(props) {

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
            <div className="col">
            <div className={styles.imageSingle}>
                <img src={props.image}/>
            </div>
            </div>
            <div className="content-info-single p-4 col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                <div className={styles.infoContentSingle}>
                <h1>{props.title}</h1>
                <p className="pt-2 rounded-12" dangerouslySetInnerHTML={{ __html: props.shortDesc }}></p>
                <span className={styles.productSinglePrice}>{changePrice(props.price)}</span><br/>
                <span className="pt-5">Forma de pagamento:</span>
                <span><a className="mt-3 d-block btn btn-success w-auto" href="#" role="button">Pedir no WhatsApp</a></span>
            </div>
            </div>
            </div>
        </div>
    )


}