
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import { Trending } from './pages/Trending';
import { Search } from './pages/Search';
import { Details } from './pages/Details';
import { SearchForm } from './components/SeacrhForm';
import './App.css';

function App({ history }) {
  const search = (searchQuery) => {
    console.log(searchQuery);
    history.push(`/search?q=${searchQuery}`);
  };
  return (
    <div className="App">
      <header className="header">
        <Link className="link" to="/">Home</Link>
        <SearchForm onSubmit={search} />
      </header>
      <Switch>
        <Route exact={true} path="/" render={(props) => <Trending {...props} />} />
        <Route path="/search" render={(props) => <Search {...props} />} />
        <Route path="/gif/:id" render={(props) => <Details {...props} />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
