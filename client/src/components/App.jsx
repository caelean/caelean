import React, { Component } from 'react';
import Home from './Home.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx'

class App extends Component {
    render() {
        return (
            <div className="page">
                {/*<Header/>*/}
                <Home/>
                {/*<Footer/>*/}
            </div>
        )
    }
}
export default App;
