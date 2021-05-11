import { useEffect, useState } from "react";

const useFetch = (url) => {
    
    const [error,setError] = useState(null);
    const [isPending,setIsPending] = useState(false);
    const [data, setData] = useState(null);
    useEffect(
        () => {
            
            const abort = new AbortController();
            setTimeout(
                () => {
                    fetch(url, {signal: abort.signal})
                        .then(
                            (res) => {
                                if(!res.ok){
                                    throw Error('Could not fetch Data from Server');
                                }
                                return res.json();
                            }
                        )
                        .then(
                            (data) => {
                                setData(data);
                                setIsPending(false);
                            }
                        )
                        .catch(err => {
                            console.log('Error Occured: '+err.message);
                            setError(err.message);
                            setIsPending(false);
                        });
                },800);

        return () => abort.abort;
        },[url]);
    
    return { data, isPending, error};
}
 
export default useFetch;