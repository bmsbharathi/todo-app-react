import './css/addTodo.css';
import { useState } from 'react';

const AddTodo = () => {
    const [todoNote,setTodoNote] = useState('');
    const onButtonClick = (evt) => {
        console.log(evt.target);

        const todo = {
            createdOn: new Date(),
            message: todoNote,
            isCompleted: false
        }

        fetch('http://localhost:8000/todo',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },                
            body: JSON.stringify(todo)
        })
        .catch(
            err => {
                console.log('ERROR '+err.message);
            }
        )
    };
    
    return ( 
        <div className="home">
            <div className="addTodos">
                <input type="text" onChange={ (evt) => setTodoNote(evt.target.value) } placeholder="Add your todo here"/> <i className="fas fa-check fa-4x" onClick={ onButtonClick }/>
            </div>
        </div>
    );
}
 
export default AddTodo;