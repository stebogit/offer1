import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../Auth';
import Header from '../Header';
import FromInput from '../FormInput';

function Login () {
    const history = useHistory();
    const location = useLocation();
    const auth = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

    const { from } = location.state || { from: { pathname: '/properties' } };
    const login = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        auth.login(
            credentials,
            () => {
                setLoading(false);
                history.replace(from)
            },
            (message) => {
                setLoading(false);
                setError(message)
            }
        );
    };

    return (
        <>
            <Header title="Login" subtitle="Please enter your credentials"/>

            <div className="container">
                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <form onSubmit={login}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <FromInput type="email" name="email" placeholder="Email *" onChange={handleChange}/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <FromInput type="password" name="password" placeholder="Password *" onChange={handleChange}/>
                            </div>

                            <div className="col-md-12 text-center">
                                <button type="submit" className="btn btn-c" disabled={loading} style={{ width: 150 }}>
                                    {loading ? <i className="fa fa-spinner fa-spin"/> : 'Log in'}
                                </button>{' '}
                                <Link to="/signin" className="btn btn-b">
                                    Sign in
                                </Link>
                            </div>
                        </div>

                        {error &&
                        <div className="col-md-12 mb-3">
                            <div className="mb-3">
                                <div className="error-message">{error}</div>
                            </div>
                        </div>}
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
