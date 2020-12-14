import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Properties from './pages/Properties';
import Details from './pages/Details';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
import Account from './pages/Account';
import Signin from './pages/Signin';
import Login from './pages/Login';
import { ProvideAuth, PrivateRoute } from './Auth';

import propertiesPayload from '../homes.json';

function App () {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        // TODO: get data from server
        setTimeout(() => {
            setProperties(propertiesPayload);
            setLoading(false);
        }, 200);
    }, []);

    const props = { properties, loading, error };

    return (
        <ProvideAuth>
            <Router>
                <Nav/>
                <main id="main">
                    <Switch>
                        <Route exact path="/properties">
                            <Properties {...props} />
                        </Route>
                        <Route path="/properties/:propertyId">
                            <Details {...props} />
                        </Route>

                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/signin">
                            <Signin/>
                        </Route>
                        <PrivateRoute path="/account">
                            <Account/>
                        </PrivateRoute>

                        <Route path="*">
                            <Header
                                title="Not found" error
                                subtitle="Sorry, we can't find the page you were looking for."
                            />
                        </Route>
                    </Switch>
                </main>
                <Footer/>
            </Router>
        </ProvideAuth>
    );
}

export default App;
