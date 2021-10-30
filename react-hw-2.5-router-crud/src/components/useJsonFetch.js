 import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts=null) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((response) => {
            if (!response.ok) {
              console.log(response.status);  
            }
           return response.json();
        })
        .then((data) => {
            setData(data);
            setError(null);
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [url, opts]);
    console.log(data, error, loading);
    return [data, error, loading];
}