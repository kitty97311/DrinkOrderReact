import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App = () => {
    const [orders, setOrders] = useState({
        coffee: 0,
        tea: 0,
        milk: 0,
        coke: 0,
        beer: 0,
    });

    const prices = {
        coffee: 480,
        tea: 280,
        milk: 180,
        coke: 190,
        beer: 580,
    };

    const handleOrder = (drink) => {
        setOrders(prevOrders => ({
            ...prevOrders,
            [drink]: prevOrders[drink] + 1,
        }));
    };

    const totalItems = Object.values(orders).reduce((a, b) => a + b, 0);
    const totalPrice = Object.keys(orders).reduce((total, drink) => total + orders[drink] * prices[drink], 0);

    return (
        <div className="container">
            <h1>Track Cafe Drink Order</h1>
            <div className="buttons">
                <button onClick={() => handleOrder('coffee')}>Coffee 480 yen</button>
                <button onClick={() => handleOrder('tea')}>Tea 280 yen</button>
                <button onClick={() => handleOrder('milk')}>Milk 180 yen</button>
                <button onClick={() => handleOrder('coke')}>Coke 190 yen</button>
                <button onClick={() => handleOrder('beer')}>Beer 580 yen</button>
            </div>
            <div className="summary">
                <h2>Your Bill</h2>
                <p>Items ordered: {totalItems}</p>
                <p>Total Price: {totalPrice} yen</p>
            </div>
        </div>
    );
};

// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);