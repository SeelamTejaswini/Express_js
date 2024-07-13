const connectdb=require('./connection');
const update=async()=>{
    let d=await connectdb();
    let data=await d.updateMany({Age:{$gte:21}},{$set:{Qualifications:'B.Tech'}}
        
    );
    console.warn("Data Updated");
}
update();