import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Item({ match }) {

    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({})

    const fetchItem = () => {
        fetch(`https://fakestoreapi.com/products/${match.params.id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setItem(data);
            });

    }

    return (
        <div>
            <h1>Item Detail</h1>
            <h3>{item.title}</h3>
            <h2>Category: {item.category}</h2>
            <h2>Description: {item.description}</h2>
            <h2>Price: {item.price}</h2>
            <img src={item.image} alt="pic" />

        </div>
    );
}

export default Item;
