import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Home from './home.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx'
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
