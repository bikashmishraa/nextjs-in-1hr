
const page = async({params}:{params:{id:string}}) => {
 const {id} = await params
 console.log('params id',params.id);
  return (
     <div>hello from id of products {id}</div>
    
  )
}
export default page