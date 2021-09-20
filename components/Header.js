import styles from '../pages/assets/css/main.module.css';
import Navbar from './Navbar';

export default function Header() {
    return(
        <div className={styles.topbar}>
            <div className="container mx-auto text-center p-3">
                <div className="row">
                    <div className="col-3">
                        Logo
                    </div>
                    <div className="col-6">
                        Pesquisa
                    </div>
                    <div className="col-3">
                        Redes
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
        
    )
}