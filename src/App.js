import './css/App.css';
import Navbar from './Navbar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ShowTodos from './ShowTodo';
import AddTodo from './AddTodo';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <AddTodo />
            <ShowTodos />
          </Route>        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
