import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Card/GenerticCards';
import Product1 from './Card/Moviecards';
import Pokemon from './Card/Pokemoncards';
import useStyles from './styles';
import axios from 'axios';



const Cards = () => {

  const[allPokemons, setAllPokemons] = useState([])
  const [contentttt, setContent] = useState([]);

 const getAllPokemons = async () => {
   const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
   const data = await res.json()
   function createPokemonObject(results)  {
    results.forEach( async pokemon => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const data =  await res.json()
      setAllPokemons( currentList => [...currentList, data])
      await allPokemons.sort((a, b) => a.id - b.id)
    })
  }
   createPokemonObject(data.results)
 }

useEffect(() => {
 getAllPokemons();
 fetchData();
}, [])

  const fetchData = async () =>{
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=64754b85c71d637fa51274bc8a1288a4`
    );
    console.log(data);
    setContent(data.results);
  }


  const classes = useStyles();


  return (
    <div className ={classes.content} >
      <div className={classes.toolbar} />
        <div className={classes.fit}>

        <Grid container justify="center" spacing={4}>
          {allPokemons.map( (pokemonStats, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Pokemon product={pokemonStats} />
            </Grid>
          ))}
        </Grid>



      <Grid container justify="center" spacing={4}>
        {contentttt.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product1 product={product} />
          </Grid>
        ))}
      </Grid>

    </div>
    </div>
  );
};

export default Cards;