const connectdb1=require('./connection');
const insert=async()=>{
    const db=await connectdb1();
    const result=await db.insertOne({Name:'Tejaswini',Age:20,Hobbies:'problem solving'});
    if(result.acknowledged)
        console.log('Data inserted successfully');
}

insert();