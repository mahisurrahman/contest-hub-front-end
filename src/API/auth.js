import axiosSecure from "."

export const saveUsertoDB = async (user) =>{
    const currentUser ={
        email: user.email,
        password: user.password,
        name: user.name,
        image: user.image,
        role: 'guest',
        status: 'verified',

    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser);

    return data;
}

//Get Token From Server//
export const getToken = async(email) =>{
    const {data} = await axiosSecure.post('/jwt', email);
    console.log('Token Received ----> ', data);
    return data;
}