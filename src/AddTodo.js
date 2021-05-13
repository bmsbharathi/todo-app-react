import './css/addTodo.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddTodo = () => {
    const [todoNote,setTodoNote] = useState('');
    const history = useHistory();
    const onButtonClick = (evt) => {
        
        const todo = {
            createdOn: new Date(),
            message: todoNote,
            isCompleted: false
        }

        if(todoNote){
            fetch('http://localhost:8000/todo',{
                method: 'POST',
                headers: { "Content-Type": "application/json" },                
                body: JSON.stringify(todo)
            })
            .then((response) => {
                if(response.ok){
                    console.log('Todo added successfully');
                    console.log('redirecting..')
                    window.location.reload('/');
                }else{
                    throw Error('Could not add todo');
                }
            })
            .catch(
                err => {
                    console.log('ERROR '+err.message);
                }
            )
        };
    }
    
    return ( 
        <div className="home">
            <div className="addTodos">
                <input type="text" onChange={ (evt) => setTodoNote(evt.target.value) } placeholder="Add your todo here"/> 
                <i className="fas fa-check fa-4x" onClick={ onButtonClick }/>
            </div>
        </div>
    );
}
 
export default AddTodo;