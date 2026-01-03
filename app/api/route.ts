export const user = [
 { id: 1, name: 'John Doe' },
 { id: 2, name: 'Jane Smith' },
 { id: 3, name: 'Janam Smith' },
 { id: 4, name: 'Janeman Smith' },
]

export async function GET()
{
 return Response.json(user)
}

export async function POST(request: Request) 
{
 const newUser = await request.json()
 const nUser = {
  id: user.length + 1,
  name: newUser.name
 }
 user.push(nUser);
 // return Response.json(newUser)
 return Response.json(newUser)

}
