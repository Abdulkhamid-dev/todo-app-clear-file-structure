import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Auth from '../views/Auth/index'


const App = (props) => {
    const [logged, setLogged] = useState(false)
    window.onload = () => {
        if (localStorage.token) {
            setLogged(true)
        }
    }

    if (logged) {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );   
    } else {
        return <Auth/>
    }
}

export default App;
