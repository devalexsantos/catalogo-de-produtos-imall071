import styles from './Navbar.module.css';
import Link from 'next/link';
import Script from 'next/script';

export default function Navbar(props) {


    return (
        <>
             <nav className="navbar navbar-expand-sm navbar-light text-center margin-auto">
                <div className="mx-auto d-sm-flex d-block flex-sm-nowrap justify-content-between">
                    <ul className={styles.icons}>
                        <li>
                        <i className="fab fa-whatsapp"></i>
                        </li>
                        <li>
                        <i className="fab fa-instagram"></i>
                        </li>
                        <li>
                        <i className="fas fa-phone-volume"></i>
                        </li>
                    </ul>
                    <button className="navbar-toggler bg-light text-right mb-3 expanded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                       MENU <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarsExample11">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    TODAS AS CATEGORIAS
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-macos mx-0 border-0 shadow" aria-labelledby="navbarScrollingDropdown">
                                    {props.cat.map(item=>(
                                        <li key={item.categoryTitle}><Link href={`/categoria/${item.slugCategory}`}><a className="dropdown-item">{item.categoryTitle}</a></Link></li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#" key="servicos">SERVIÇOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#" key="sobre">SOBRE NÓS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#" key="contato">CONTATO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Script src="https://kit.fontawesome.com/33c943d672.js" crossorigin="anonymous"></Script> 
        </>
        
    )


}