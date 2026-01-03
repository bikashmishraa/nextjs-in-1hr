
type User = {

 id: number;
 name: string;
 email: string;
 username: string;
 phone: string;

}

export default async function (){
 const fetchUsers = await fetch("http://jsonplaceholder.typicode.com/users");
 const users = await fetchUsers.json();

 return(
  <div className='text-red-400 py-5 px-5'>
   <ul className=''>
    {users.map((user:User) =>{
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