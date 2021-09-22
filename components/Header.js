import styles from '../pages/assets/css/main.module.css';
import Navbar from './Navbar';
import Image from 'next/image';
import Link from 'next/link'

export default function Header(props) {
    return (
        <div className="container-flui bg-dark">
            <div className="container mx-auto text-center p-3">
                <div className="row">
                    <div className="col-12" rel="noreferrer">
                        <a href="https://catalogo-de-produtos-imall071.vercel.app/" rel="noreferrer">
                                <div className="cursor-pointer">
                        <Image
                            src="/logo-imall.png"
                            alt="iMall 071"
                            width={150}
                            height={150}
                        />
                        </div>
                        </a>
                    </div>
                </div>
            </div>
            <div>
            <Navbar cat={props.cat} />
            </div>
        </div>

    )
}