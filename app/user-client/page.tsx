'use client'
import { useState, useEffect} from 'react';

type User = {

 id: number;
 name: string;
 email: string;
 username: string;
 phone: string;

}

export default function userClient(){
 const [users, setUsers] = useState<User[]>([]);
 const [loading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState('');

 useEffect(() =>{
  const fetchUsers = async () =>{
   try{
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    if(!response.ok){
     throw new Error("failed to fetch user data from API");
    }
    const data = await response.json();
    console.log(data);
    setUsers(data);
    setLoading(false);
   }catch(err){
    setError('Failed to fetch users');
    setLoading(false);
   }
  }
  fetchUsers();
 },[])

 if (loading){
  return <div>Loading...</div>
 }
 if (error){
  return <div>{error}</div>
 }

 return(
  <div className='text-white py-5 px-5'>
   <ul className='text-white '>
    {users.map((user) =>{
     console.log(user);
     return (

      <li key={user.id}>
       {user.name}-{user.email}
      </li>
      )
     })}
   </ul>
  </div>
 )

}