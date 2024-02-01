import {
    useQuery,
  } from '@tanstack/react-query'
import axiosSecure from '../API';


const UseContests = () =>{
    const {data: contests=[], refetch} = useQuery({
        queryKey: ['contests'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/contests');
            return res.data;
        }
    });
    return [contests, refetch]
}

export default UseContests;