import { useEffect, useState } from "react";
import axiosSecure from "../API";

const UseAllContest = () =>{
    const [allContest, setAllContests] = useState([]);
    const [loading, setLoading] = useState(true);   

    useEffect(()=>{
        axiosSecure.get('/contests')
        .then(res =>{
            setAllContests(res.data);
            setLoading(false);
        })
    },[])
    return [allContest, loading];
}

export default UseAllContest;