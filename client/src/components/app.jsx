import React, { Component } from 'react';
import Home from './Home.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <br/>
                <Home/>
                <Footer/>
            </div>
        )
    }
}
export default App;
