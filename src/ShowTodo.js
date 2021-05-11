import useFetch from './useFetch';
import './css/showtodo.css';

const ShowTodos = () => {
    
    const {data, isPending, error} = useFetch('http://localhost:8000/todo');

        
    if(data){
        data.sort( (data1, data2) => {
            return data1.createdOn > data2.createOn ? -1 : 1;
        } );
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