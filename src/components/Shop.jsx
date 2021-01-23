import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([])

  const fetchItems = () => {
    // const data = await fetch('https://fakestoreapi.com/products/');
    // const items = await data.json();
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setItems(data);
      });

  }

  return (
    <div>
      <h1>Shop Page</h1>
      <ul className="shop-items">
        {items.map(item => (
          <li className="shop-item" key={item.id}>
            <Link to={`/shop/${item.id}`}>
              <img src={item.image} alt="pic" />
            </Link>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;