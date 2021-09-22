import styles from '../pages/assets/css/main.module.css';
import Navbar from './Navbar';
import Image from 'next/image';

export default function Header(props) {
    return (
        <div className="w-auto bg-gray-900">
            <div className="container mx-auto text-center p-3">
                <div className="row">
                    <div className="col-12" rel="noreferrer">
                        <a href="/">
                        <Image
                            src="/logo-imall.png"
                            alt="iMall 071"
                            width={150}
                            height={150}
                        />
                        </a>
                    </div>
                </div>
            </div>
            <Navbar cat={props.cat} />
        </div>

    )
}