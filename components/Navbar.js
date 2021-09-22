import 'bootstrap/dist/css/bootstrap.min.css';
import { getCategories } from './dato-cms';
import ListCategories from './ListCategories';

const Navbar = (props) => (

    <div className="container-fluid text-center margin-auto bg-dark">
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarsExample11">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    TODAS AS CATEGORIAS
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarScrollingDropdown">
                                    <ListCategories cat={props.cat} />
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">SERVIÇOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">SOBRE NÓS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">CONTATO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
)

export default Navbar;