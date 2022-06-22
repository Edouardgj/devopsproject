import React, {useState, useEffect} from 'react'

const Toys =() => {
    const [Toys, setToys ] = useState([
      
    ]);
    useEffect(() => {
      fetch("http://localhost:4000/toyslist")
        .then((res) => res.json())
        .then((Toys) => {
          setToys(Toys);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    return (
      <div className='divjouets'> 
      <ul>
        {Toys.map((Toys) => (
          <div>
          <li key={Toys.id}><h4> {Toys.name} </h4></li>
          <li> <h4> {Toys.price} </h4> </li>
          </div>
        ))}
      </ul>
      </div>
    );
  };
  
  
  export default Toys