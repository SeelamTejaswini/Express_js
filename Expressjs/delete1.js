const connectdb=require('./connection');
const deletedata=async()=>{
    let d=await connectdb();
    let result=await d.deleteOne({Age:19 }
    );
    console.warn("Data deleted successfully",result);
}
deletedata();