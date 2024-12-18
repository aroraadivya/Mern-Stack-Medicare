import {useEffect, useState} from 'react';
import { token } from '../config.js';

const useFetchData = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url, {
                headers: {Authorization: `Bearer ${token}`}
            })

            const result = await res.json();

            if(!res.ok){
                return toast.error(result.message);
            }
        }
    },[]);
  
  
    return (
        <div>

        </div>
  );
};

export default useFetchData
