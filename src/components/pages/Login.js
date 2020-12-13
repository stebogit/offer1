import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../Auth';
import Header from '../Header';

function Login () {
    const history = useHistory();
    const location = useLocation();
    const auth = useAuth();

    const { from } = location.state || { from: { pathname: '/properties' } };
    const login = () => {
        auth.signin(() => {
            history.replace(from);
        });
    };

    return (
        <>
            <Header title="Login" subtitle="Please enter your credentials"/>

            <div className="container">
                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <form>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="form-group">
                                    <input type="text" name="username" required
                                           className="form-control form-control form-control-a"
                                           placeholder="Username"/>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-group">
                                    <input name="password" type="password" required
                                           className="form-control form-control form-control-a"
                                           placeholder="Password"/>
                                </div>
                            </div>

                            <div className="col-md-12 text-center">
                                <button type="button" className="btn btn-c" onClick={login}>
                                    Log in
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
