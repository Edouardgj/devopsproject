import React from 'react';

const NotFound = () => {
  return (
    <div className="NotFoundContainer" >
      <span className="NFText">
        <h1>404</h1>
        <h1 className="NotFoundText">ERRRRR!</h1>
        <p>Il semblerait que la page que vous recherchez n&apos;existe pas.</p>
      </span>
    </div>
  );
}

export default NotFound