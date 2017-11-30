import React, { Component } from 'react';
import Home from './home.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx'
class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <br/>
                <Home/>
                {/*<Footer/>*/}
            </div>
        )
    }
}
export default App;
