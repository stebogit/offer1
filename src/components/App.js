import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropertyList from './pages/PropertyList';
import PropertyDetails from './pages/PropertyDetails';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
import Account from './pages/Account';
import Signin from './pages/Signin';
import Login from './pages/Login';
import { ProvideAuth, PrivateRoute } from './Auth';
import axios from 'axios';

function App () {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        async function fetchProperties() {
            try {
                const { data } = await axios.get('/api/properties');
                setProperties(data);
            } catch (e) {
                setError(true);
            }
            setLoading(false);
        }

        fetchProperties();
    }, []);

    const props = { properties, loading, error };

    return (
        <ProvideAuth>
            <Router>
                <Nav/>
                <main id="main">
                    <Switch>
                        <Route exact path="/properties">
                            <PropertyList {...props} />
                        </Route>
                        <Route path="/properties/:propertyId">
                            <PropertyDetails {...props} />
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
                                title="Not found" hasError
                                subtitle="Sorry, we can't find the page you are looking for."
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
