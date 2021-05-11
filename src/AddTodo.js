import './css/addTodo.css';

const AddTodo = () => {
    return ( 
        <div className="home">
            <div className="addTodos">
                <input type="text" placeholder="Add your todo here"/> <i className="fas fa-check fa-4x" />
            </div>
        </div>
    );
}
 
export default AddTodo;