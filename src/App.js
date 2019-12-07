import React from 'react';
import PathRouter from './Routers/PathRouter';
import './App.css';
import CartContainer from './Containers/user/CartContainer';

function App() {
    return (
        <div >
            <PathRouter/>
            <CartContainer/>
        </div>
    );
}

export default App;
