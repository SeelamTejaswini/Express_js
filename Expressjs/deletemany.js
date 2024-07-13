const connectdb=require('./connection');
const deletedata=async()=>{
    let d=await connectdb();
    let result=await d.deleteMany({Hobbies:{$gte:'problem solving'} }
    );
    console.warn("Data deleted successfully",result);
}
deletedata();