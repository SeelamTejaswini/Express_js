const connectdb1=require('./connection');
const insert=async()=>{
    const db=await connectdb1();
    const result=await db.insertMany([{Name:'Akhila',Age:21,Hobbies:'problem solving'},{Name:'Divya',Age:20,Hobbies:'problem solving'},{Name:'Rama',Age:21,Hobbies:'problem solving'},{Name:'Yamuna',Age:18,Hobbies:'reading Books'}]);
    if(result.acknowledged)
        console.log('Data inserted successfully');
}

insert();