import ShowTodo from './ShowTodo';
import AddTodo from './AddTodo';
import useFetch from './useFetch';

const Home = () => {
    
    var {data, isPending, error} = useFetch('http://localhost:8000/todo');

        
    if(data){
        data.sort( (object1, object2)  => {
            return ( object1.createdOn > object2.createdOn )? -1 : 1;
        });
        console.log('data is sorted..');
    }
    
    return (
        <div>
            <AddTodo />
            <ShowTodo data={data} isPending={isPending} error={error} />
        </div>
      );
}
 
export default Home;