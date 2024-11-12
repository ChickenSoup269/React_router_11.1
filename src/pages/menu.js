
import React from 'react';
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
            <a className="menu-link" href={`/menu/${item.id}`}>
              <h3 className="menu-item-title">{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Menu;
