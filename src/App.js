//Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './booking/Home';
import Register from './auth/Register';
import Login from './auth/Login';
import TopNav from './components/TopNav';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
