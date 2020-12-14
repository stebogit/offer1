import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Auth';
import Header from '../Header';
import FromInput from '../FormInput';

function Signin () {
    const history = useHistory();
    const auth = useAuth();
    const [error, setError] = useState('');
    const [user, setUser] = useState({
        first: '',
        last: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const signin = (e) => {
        e.preventDefault();
        setError('');
        auth.signin(
            user,
            () => history.replace('/properties'),
            (message) => setError(message)
        );
    };

    return (
        <>
            <Header title="Signin" subtitle="Please create your account"/>

            <div className="container">
                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <form onSubmit={signin}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <FromInput type="text" name="first" placeholder="First Name" onChange={handleChange}/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <FromInput type="text" name="last" placeholder="Last Name" onChange={handleChange}/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <FromInput type="email" name="email" placeholder="Email" onChange={handleChange}/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <FromInput type="password" name="password" placeholder="Password" onChange={handleChange}/>
                            </div>

                            <div className="col-md-12 text-center">
                                <button type="submit" className="btn btn-c">
                                    Sign in
                                </button>
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

export default Signin;
