import React from 'react';
import Header from "../component/header";
//import Navigation from "../component/Navigation";
// <Navigation/>


function Home() {
    return (
      <div className="home" id="home">
        <Header />
       <div>
        <p>Bonjour Monde !</p>
       </div>
      </div>
    );
  }
  
  export default Home;