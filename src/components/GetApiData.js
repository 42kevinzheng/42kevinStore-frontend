import React, {useState, useEffect} from 'react';
import axios from 'axios';

const GetApiData = () => {

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
  }, [])
  
//   {
//     name:'Macboosfk', 
//     category: 'Computer',
//     image: 's',      
//     price: '10', 
//     countInStock: 16,
//     brand: 'Apple',
//     rating: 4.0,
//     numReviews: 15,
//     description:'Apple macbook', 
//   },





    return (
        <div>
        

        {/* Movie Api Data  */}
        {movie.map((product) => (
            <p>
            {
            `{  name: '${product.title || product.original_title}',
                category: '${product.media_type}',
                image: '${'https://image.tmdb.org/t/p/w500/'+product.poster_path}',
                price: '${product.vote_count}', 
                countInStock: '${Math.floor(product.popularity)}',
                brand: '${product.media_type}',
                rating: '${product.vote_average/2}',    
                numReviews: '${product.vote_count}',
                description: '${product.overview}',
            },`
            }
            </p>
        ))}




{/* {allPokemons.map( (pokemonStats) => (
              <p>
              {
              `{  name: '${pokemonStats.original_title || pokemonStats.name}',
                  category: '${product.media_type}',
                  image: '${pokemonStats.sprites.other.dream_world.front_default}',
                  price: '${product.vote_count}', 
                  countInStock: '${Math.floor(product.popularity)}',
                  brand: '${product.media_type}',
                  rating: '${pokemonStats.base_experience}',    
                  numReviews: '${product.vote_count}',
                  description: '${product.overview}',
              },`
              }
              </p>
          ))} */}





            
        </div>
    )
}

export default GetApiData
