import React from "react";
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import axios from "axios";




class App extends React.Component {
    
  state = {movies: [],
  moviesStatic: []
}

/* async componentDidMount() {
  const moviesURL = "http://localhost:3001/movies"
  const moviesStaticURL = "http://localhost:3002/moviesStatic"

  const moviesResponse = await fetch(moviesURL)
  const moviesStaticResponse = await fetch(moviesStaticURL)

  const moviesData = await moviesResponse.json();
  const moviesStaticData = await moviesStaticResponse.json();

  this.setState({movies:moviesData, moviesStatic:moviesStaticData})
} */

async componentDidMount() {
  const moviesResponse = await axios.get("http://localhost:3001/movies")
  const moviesStaticResponse = await axios.get("http://localhost:3002/moviesStatic")
  this.setState({movies:moviesResponse.data, moviesStatic:moviesStaticResponse.data})

}
  
  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    );

    this.setState({
      movies: newMovieList
      });

/*axios.delete(`http://localhost:3001/movies/${movie.id}`) */
  }

  filterMovie = (target) => {
    const newMovieList = this.state.moviesStatic.filter(
      m => m.name.toLowerCase().match(target.toLowerCase())
    );

    this.setState({
      movies: newMovieList
      });
  }




  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar
              movies = {this.state.movies}
              movieFilterFunc = {this.filterMovie}  
            />
          </div>
        </div>
        <MovieList 
          movies = {this.state.movies}
          movieDelFunc = {this.deleteMovie}
        />
      </div>
    )
  }
}


export default App;