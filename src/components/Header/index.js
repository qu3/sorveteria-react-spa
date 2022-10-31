import {Link} from "react-router-dom";
import './style.css'; 

export default function Header() {
        return (
            <header>
                <div className="limitar-secao topo">
                    <img src="assets/logo.png" alt="Sorveteria" title="Sorveteria"/>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/sabores'>Sabores</Link>
                        <Link to='/sobre'>Sobre</Link>
                    </nav>
                </div>
            </header>
        )
    }
