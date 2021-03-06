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
    <h4>Vous cherchez quelque chose en particulier&nbsp;?</h4>
    <label>	
    <input placeholder="Votre activité" onChange={event => setQuery(event.target.value)}/>
    <button className="email-btn">Rechercher</button>
    </label>
    <ul>
    {Toys.filter(Toys => {
    if (query === '') {
      return Toys;
    } else if (Toys.name.toLowerCase().includes(query.toLowerCase())) {
      return Toys;
    }
  }).map((Toys) => (
        <div className="toys_container">
          <li> <h1> {Toys.name} </h1> </li>
          <li> <h3> {Toys.localisation} </h3> </li>
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