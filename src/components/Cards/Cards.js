import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './Card/Card';
import axios from 'axios';
import useStyles from './styles';
import { useDispatch,useSelector } from 'react-redux';
import {listProducts, listTopSellers} from '../../actions/actions2';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Cards = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const productList = useSelector((state)=>state.productList);
  const {products} = productList;
  const[allPokemons, setAllPokemons] = useState([])
  const [movie, setMovie] = useState([]);

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

const fetchData = async () =>{
  const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=64754b85c71d637fa51274bc8a1288a4`);
  setMovie(data.results);
}

useEffect(() => {
 getAllPokemons();
 fetchData();
 dispatch(listProducts({}));
}, [dispatch])

  return (
    <div className ={classes.content} >
      <div className={classes.toolbar} />
        <div className={classes.fit}>

        <Grid container justify="center" spacing={4}>
          {allPokemons.map( (pokemonStats, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Card
              product = {pokemonStats} 
              title = {pokemonStats.original_title}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
              rating = {pokemonStats.base_experience}
              />
            </Grid>
          ))}
        </Grid>

        <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
            <Card 
            product={product} 
            image = {product.image}
            title = {''}
            name = {product.name}
            price ={product.price}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container justify="center" spacing={4}>
        {movie.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Card
            product={product} 
            image = {'https://image.tmdb.org/t/p/w500/'+product.poster_path}
            title = {product.title}
            name = {product.title}
            dis = {product.overview}
            price ={product.popularity}
            rating = {product.vote_average}
            />
          </Grid>
        ))}
      </Grid>

    </div>
    </div>
  );
};

export default Cards;