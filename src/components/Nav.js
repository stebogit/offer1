import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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

                <div className={`navbar-collapse collapse justify-content-end ${menuOpen && 'show'}`}
                     id="navbarDefault">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/properties" className="nav-link" activeClassName="active">
                                Properties
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
