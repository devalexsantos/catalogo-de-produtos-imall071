import styles from '../pages/assets/css/main.module.css';
import Navbar from './Navbar';
import Image from 'next/image'

export default function Header() {
    return (
        <div className="w-auto bg-gray-900">
            <div className="container mx-auto text-center p-3">
                <div className="row">
                    <div className="col-12">
                        <Image
                            src="/logo-imall.png"
                            alt="iMall 071"
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
            </div>
            <Navbar />
        </div>

    )
}