import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav () {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
            <div className="container">
                <button className={`navbar-toggler ${!menuOpen && 'collapsed'}`}
                        type="button" aria-controls="navbarDefault" aria-label="Toggle navigation"
                        aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span/>
                    <span/>
                    <span/>
                </button>
                <a className="navbar-brand text-brand" href="#">
                    O<span className="color-c">ffer</span><span className="color-b">1</span>
                </a>

                {/*<button className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none"*/}
                {/*        type="button" aria-expanded={menuOpen}*/}
                {/*        onClick={() => setMenuOpen(!menuOpen)}*/}
                {/*>*/}
                {/*    <span className="fa fa-search" aria-hidden="true"></span>*/}
                {/*</button>*/}
                <div className={`navbar-collapse collapse justify-content-end ${menuOpen && 'show'}`}
                     id="navbarDefault">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/properties" className="nav-link active">Properties</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/details" className="nav-link active">Details</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
