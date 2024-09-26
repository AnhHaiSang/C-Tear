import React from 'react';
import HomePage from '../src/Pages/user/home_page';
import ProductLists from '../src/Pages/user/Product_lists';
import './App.css';

function App() {
    return (
        <div className="App">
            <HomePage />
            <ProductLists />
        </div>
    );
}

export default App;
