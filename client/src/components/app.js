import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Home from './home.js';
import Header from './header.js';
import Footer from './footer.js'
class App extends Component {
    render() {
        return (
            <div>
            <Router>
                <div>
                    <Route name="home" exact path="/" component={Home} />
                </div>
            </Router>
            <Router>
                <div>
                    <Route name="header" exact path="/" component={Header} />
                </div>
            </Router>
            <Router>
                <div>
                    <Route name="footer" exact path="/" component={Footer} />
                </div>
            </Router>
            </div>
        )
    }
}
export default App;
