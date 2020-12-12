import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Properties from './Properties';
import Details from './Details';
import Nav from './Nav';
import Footer from './Footer';

function Page () {
    return (
        <Router>
            <Nav />
            <main id="main">
                <Switch>
                    <Route exact path="/properties">
                        <Properties/>
                    </Route>
                    <Route path="/details">
                        <Details/>
                    </Route>
                </Switch>
            </main>
            <Footer />
        </Router>
    );
}

export default Page;
