import Script from 'next/script';


export default function Footer() {
    return (
        <>
            <footer className="container-fluid bg-dark text-white">
                <div className="container">
                    <div className="row p-5">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <h5>iMall071</h5>
                            <p>A iMall071 é uma empresa especializada em manutenção e venda de equipamentos eletrônicos,... <br />
                                Veja mais
                            </p>
                        </div>

                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <h5>Endereço</h5>
                            <p>Av. Dom Eugênio Sales, 22 - Boca do Rio, Salvador - BA, 41706-670</p>
                            <span>Horário de atendimento:</span>
                            <ul>
                                <li>Seg. a Sexta: das 09h ás 18h</li>
                                <li>Sáb.: das 09h ás 14h</li>
                            </ul>
                        </div>

                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <h5>Atendimento</h5>
                            <ul>
                                <li><i className="fab fa-whatsapp"></i> (71) 99231-4037</li>
                                <li><i className="far fa-envelope"></i> contato@imall071.com.br</li>
                                <li><i className="fas fa-store-alt"></i> Presencial</li>
                            </ul>
                        </div>

                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <h5>Como chegar</h5>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.791429146571!2d-38.4214122!3d-12.9751869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5be1b081e0eeefc!2siMall%20071!5e0!3m2!1spt-BR!2sbr!4v1632845226758!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
                        </div>
                    </div>
                    <Script src="https://kit.fontawesome.com/33c943d672.js" crossorigin="anonymous"></Script>
                </div>
            </footer>
        </>
    )
}