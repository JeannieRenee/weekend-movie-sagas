import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails'
import MovieForm from '../MovieForm/MovieForm'



function App() {
  return (
    <div className="App">
        <h1>some sort of placeholder</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id" exact>
          <MovieDetails />
        </Route>
        <Route path="/add" exact>
          <MovieForm />
        </Route>
      </Router>
    </div>
  );
}


export default App;
