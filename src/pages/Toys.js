import React, {useState, useEffect} from 'react'



const Toys =() => {
  const [Toys, setToys ] = useState([
    
  ]);
  const [query, setQuery] = useState("")
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
    <>
    <div className='divjouets'> 
    <input placeholder="Votre jouet" onChange={event => setQuery(event.target.value)}/>
    <ul>
    {Toys.filter(Toys => {
    if (query === '') {
      return Toys;
    } else if (Toys.name.toLowerCase().includes(query.toLowerCase())) {
      return Toys;
    }
  }).map((Toys) => (
        <div>
          <li> <h1> {Toys.name} </h1> </li>
          <li> <h4> {Toys.price} </h4> </li>
          <li> <p>{Toys.description} </p> </li>
        </div>
      ))}
    </ul>
    </div>

    </>
  );
};  


export default Toys