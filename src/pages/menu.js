
import React from 'react';
import { Link } from 'react-router-dom'; 
const menuData = [
  { id: 1, name: 'Pizza Margherita', description: 'Pizza with mozzarella cheese and tomato sauce.' },
  { id: 2, name: 'Spaghetti Carbonara', description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.' },
  { id: 3, name: 'Caesar Salad', description: 'A salad with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.' },
 
];

function Menu() {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1>
      <ul className="menu-list">
        {menuData.map(item => (
          <li key={item.id} className="menu-item">
            <Link to={`/menu/${item.id}`} className="menu-link">
              <h3 className="menu-item-title">{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Menu;
