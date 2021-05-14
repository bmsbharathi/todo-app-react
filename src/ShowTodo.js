import './css/showtodo.css';

const ShowTodos = (props) => {
    
    var data = props.data;
    var isPending = props.isPending;
    var error = props.error;

    function deleteTodo(todoId) {
        
        fetch('http://localhost:8000/todo/'+todoId,{
            method: 'DELETE'
        })
        .then(
            (response) => {
                console.log(todoId);
                if(response.ok){
                    window.location.reload('/');
                } else {
                    throw Error('Could not delete todo');
                }
            }
        )
        .catch(
            (err) => {
                console.log(err.message);
            }
        )
    };

    return ( 
        <div className="showTodo">
            <h3> Your Todos</h3>
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            {   
                data &&
                data.map( (data) => (
                    <div className="todos" key={data.id}>
                        { data.message }
                        <div className="actions">
                            <i className="fas fa-trash-alt fa-2x" onClick={ () => {deleteTodo(data.id)}}></i>
                            <i className="fas fa-check-circle fa-2x"></i>
                        </div>
                    </div>
                 ) )
            }
            <div className="showProgress">

            </div>

        </div>
     );
}
 
export default ShowTodos;