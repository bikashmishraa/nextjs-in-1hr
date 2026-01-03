import { METHODS } from "http";
import { headers } from "next/headers";
import Image from "next/image";
import { revalidatePath } from "next/cache";

type User = {
 id: string;
 name: string;
 email: string;
 profileImg: string;
}

export const user = [
 { id: 1, name: 'John Doe' },
 { id: 2, name: 'Jane Smith' },
 { id: 3, name: 'Janam Smith' },
 { id: 4, name: 'Janeman Smith' },
]


export default async function MockUsers(){
 const fetchUser = await fetch("http://localhost:3000/api");
 const user = await fetchUser.json();

 async function addUser ( formdata : FormData){
  'use server';
  const name = formdata.get('name')
  const res = await fetch("http://localhost:3000/api",
  {
   method: "POST",
   headers:{
    'Content-Type': 'application/json'
   },
   body: JSON.stringify({ name: name }),
  }
  );

  const newUser = await res.json();
  revalidatePath('/mock-users');
  console.log(newUser)
 }

 return (
  <div>
          <form action={addUser}>
           <input type="text" name="name" required className="bg-white" /> 
           <button type="submit" >submit</button>
          </form>
  <div>
   <ul>
    <li>
     {user.map((u: User) =>{
        return (
         <div key={u.id}>
         <div key={u.id}>
           {u.name} - {u.name} - 
           {/* <Image src={u.profileImg} alt={u.name} width={25} height={25} unoptimized></Image> */}
           {u.profileImg}
         </div>
         </div>
        )
     })}
    </li>
   </ul>
  </div>
  </div>
 )
}