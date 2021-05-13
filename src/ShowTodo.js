import './css/showtodo.css';

const ShowTodos = (props) => {
    
    var data = props.data;
    var isPending = props.isPending;
    var error = props.error;

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
                            <i className="fas fa-trash-alt fa-2x"></i>
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