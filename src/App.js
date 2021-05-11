import './css/App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import ShowTodos from './ShowTodo';
import AddTodo from './AddTodo';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AddTodo />
        <ShowTodos />
      </Router>
    </div>
  );
}

export default App;
