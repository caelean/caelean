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
                <Header/>
                <Home/>
                <Footer/>
            </div>
        )
    }
}
export default App;
