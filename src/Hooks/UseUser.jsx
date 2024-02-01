import {
    useQuery,
  } from '@tanstack/react-query'
import axiosSecure from '../API';


const UseUser = () =>{
    const {data: users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });
    return [users, refetch]
}

export default UseUser;