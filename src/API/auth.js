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