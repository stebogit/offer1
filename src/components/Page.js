import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Properties from './Properties';
import Details from './Details';
import Nav from './Nav';
import Footer from './Footer';

import propertiesPayload from '../homes.json';

function Page () {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        // TODO: get data from server
        setTimeout(() => {
            setProperties(propertiesPayload)
            setLoading(false)
        }, 200);
    },[]);

    const props = { properties, loading, error };

    // TODO: handle server error

    return (
        <Router>
            <Nav />
            <main id="main">
                <Switch>
                    <Route exact path="/properties">
                        <Properties {...props} />
                    </Route>
                    <Route path="/properties/:propertyId">
                        <Details {...props} />
                    </Route>
                    {/* TODO: add sign-in */}
                </Switch>
            </main>
            <Footer />
        </Router>
    );
}

export default Page;
