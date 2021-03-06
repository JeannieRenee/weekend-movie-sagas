// style import
import './App.css';
// jsx imports
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails'
// router import
import {HashRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="AppHeader">
        <h1>Sagas</h1>
      </div>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id" exact>
          <MovieDetails />
        </Route>
      </Router>
    </div>
  );
}

export default App;
