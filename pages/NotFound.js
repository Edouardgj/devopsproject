import React from 'react';
import './CSS/NotFound.css';

function NotFound() {
  return (
    <div className="NotFoundContainer" >
      <span className="NFText">
        <p className="NotFoundText">ERRRRR!</p>
        <p>Il semblerait que la page que vous recherchez n'existe pas.</p>
      </span>
    </div>
  );
}

export default NotFound;