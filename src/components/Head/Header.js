import Navbar from './Navbar/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

export default function Header(props) {

    return (
        <div className="container-fluid bg-dark nav-shadow-menu">
            <div className="container mx-auto text-center p-3">
                <div className="row">
                    <div className="col-12" rel="noreferrer">
                    <div className="logo">
                        <Link href="/">
                        <Image
                            src="/logo-imall.png"
                            alt="iMall 071"
                            width={150}
                            height={150}
                        />
                        </Link>
                        </div>
                        <h1 className="fs-4 text-white mb-0">Manutenção e Venda de Computadores, Celulares e Acessórios.</h1>
                    </div>
                </div>
            </div>
            <div>
            <Navbar cat={props.cat} />
            </div>
        </div>
    )
}