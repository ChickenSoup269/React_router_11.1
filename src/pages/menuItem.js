import React from 'react';
import { useParams } from 'react-router-dom';

function MenuItem() {
  const { id } = useParams();

  return (
    <div className="menu-item-container">
      <h1 className="menu-item-name">Menu Item:{id}</h1>
    </div>
  );
}

export default MenuItem;
