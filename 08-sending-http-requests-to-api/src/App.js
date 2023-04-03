import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';
import Button from './components/UI/Button';
import Switch from './components/UI/Switch';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [switchApi, setSwitchApi] = useState(false);

  // ---Use The Star Wars API---
  //GET
  const fetchMoviesFromPublicApiHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  // ---Use FireBase---
  //GET
  const fetchMoviesFromFireBaseHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://react-testing-0000-default-rtdb.firebaseio.com/movies.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesFromFireBaseHandler();
  }, [fetchMoviesFromFireBaseHandler]);

  //POST
  async function addMovieHandler(movie) {
    const resopnse = await fetch(
      'https://react-testing-0000-default-rtdb.firebaseio.com/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await resopnse.json();
    console.log(data);
  }

  const onSwitchChangeHangler = () => {
    setSwitchApi(!switchApi);
  };

  //Validations
  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <p style={{ flex: '1 1 0px' }}>The Star Wars API</p>
        <Switch isOn={switchApi} onChange={onSwitchChangeHangler} />
        <p style={{ flex: '1 1 0px' }}>Fire Base</p>
      </section>
      {switchApi && (
        <section>
          <AddMovie onAddMovie={addMovieHandler} />
        </section>
      )}
      <section>
        {switchApi && (
          <Button onClick={fetchMoviesFromFireBaseHandler}>
            Fetch Movies(Fire Base)
          </Button>
        )}
        {!switchApi && (
          <Button onClick={fetchMoviesFromPublicApiHandler}>
            Fetch Movies(Public Api)
          </Button>
        )}
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
