import {user} from '../route'

export async function GET(request : Request, {params} :{params :{id:string}})
{
 const {id} = await params;
 const find_user = user.find( (u) =>{
   return u.id === parseInt(id)
 } )
 return Response.json(find_user)
}