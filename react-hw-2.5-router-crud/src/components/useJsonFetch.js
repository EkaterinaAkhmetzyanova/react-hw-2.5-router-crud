import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts=null) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((response) => {
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