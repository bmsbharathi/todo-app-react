import ViewTodo from './ViewTodo';
import './css/home.css';

const Home = () => {
    return ( 
        <div className="home">
            <div className="addTodos">
                <input type="text" value = "Add your todo here"/> <i className="fas fa-check fa-4x" />
            </div>
            <ViewTodo />
        </div>
    );
}
 
export default Home;