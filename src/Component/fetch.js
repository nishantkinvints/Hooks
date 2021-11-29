import axios from 'axios';
import React, { useState } from 'react';


function Api() {
  const [movies, setMovies] = useState([]);
  const [async_movies, setAsync_Movies] = useState([]);
  const [axios_movies, setAxios_Movies] = useState([]);

  function fetchMoviesHandler() {
    fetch('https://swapi.dev/api/films/')
        .then((response) => {
            return response.json();
        }) 
        .then((data) => {
            console.log(data);
            const transformedMovies = data.results.map((movieData) => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date,
                };
            });
            setMovies(transformedMovies);
        })
        .catch((error) => {
            console.log(error);
        })   
    }
    console.log(movies);    

    async function async_fetchMoviesHandler() {
        try{
            const response = await fetch('https://swapi.dev/api/films/');
            const data = await response.json();
        
            const transformedMovies = data.results.map((movieData) => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date,
                };
            });
            setAsync_Movies(transformedMovies);
        }
        catch ( error ){
            console.log(error);
        }
    }

    // console.log(async_movies);
  
    function axios_get_data () {
        axios.get('https://swapi.dev/api/films/')
            .then((data_response) => {
                const axios_transformedMovies = data_response.data.results.map((movieData) => {
                    return {
                        id: movieData.episode_id,
                        title: movieData.title,
                        openingText: movieData.opening_crawl,
                        releaseDate: movieData.release_date,
                    }
                })

                setAxios_Movies(axios_transformedMovies);
            })
            .catch((error) => {
                console.log(error)
            })
        }

    console.log(axios_movies);

    //POST Data
    
    async function async_addMovieHandler() {
        const response = await fetch('https://reqres.in/api/register', {
            method: 'POST',
            body: {
                email: "eve.holt@reqres.in",
                password: "pistolnew"
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        // console.log(data);
    }

    const axios_addMovieHandler = () => {
        axios.post('https://reqres.in/api/register', {
            email: "eve.holt@reqres.in",
            password: "pistolnew"
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        <button onClick={async_fetchMoviesHandler}>async awoait Fetch Movies</button>
        <button onClick={axios_get_data}>async awoait Fetch Movies</button>
        <button onClick={async_addMovieHandler}>async Post Data</button>
        <button onClick={axios_addMovieHandler}>Axios Post Data</button>
      </section>
    </React.Fragment>
  );
}

export default Api;