const connectdb=require('./connection');
const update=async()=>{
    let d=await connectdb();
    let data=await d.updateOne({
        Name:'Tejaswini'},{$set:{Age:19}}
    );
    console.warn("Data Updated");
}
update();