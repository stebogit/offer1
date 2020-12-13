import { useAuth } from '../Auth';
import Header from '../Header';
import { useHistory } from 'react-router-dom';

function Account () {
    const history = useHistory();
    const auth = useAuth();

    return (
        <>
            <Header title="Account" subtitle="Welcome to your account"/>

            <div className="container">
                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <button type="button" className="btn btn-c"
                            onClick={() => auth.signout(() => history.push('/properties'))}>
                        Sign out
                    </button>
                </div>
            </div>
        </>
    );
}

export default Account;
