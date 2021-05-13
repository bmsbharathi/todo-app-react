import useFetch from './useFetch';
import './css/showtodo.css';

const ShowTodos = () => {
    
    var {data, isPending, error} = useFetch('http://localhost:8000/todo');

        
    if(data){
        data.sort( (object1, object2)  => {
            return ( object1.createdOn > object2.createdOn )? -1 : 1;
        });
        console.log('data is sorted..');
    }

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