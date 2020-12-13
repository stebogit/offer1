import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './Auth';

function Nav () {
    const [menuOpen, setMenuOpen] = useState(false);
    const auth = useAuth();

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
                <span className="navbar-brand text-brand">
                    O<span className="color-c">ffer</span><span className="color-b">1</span>
                </span>

                <div className={`navbar-collapse collapse justify-content-end ${menuOpen && 'show'}`}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/properties" className="nav-link" activeClassName="active">
                                Properties
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link" activeClassName="active"
                                to={auth.user ? '/account' : '/login'}
                            >
                                {auth.user ? 'Account' : 'Login'}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
