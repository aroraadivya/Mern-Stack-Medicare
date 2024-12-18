import {useEffect, useState} from 'react'

const useFetchData = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url, {
                headers: {Authorization: `Bearer ${token}`}
            })
        }
    },[]);
  
  
    return (
        <div>
            
        </div>
  );
};

export default useFetchData
