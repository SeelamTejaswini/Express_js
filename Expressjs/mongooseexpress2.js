const mongoose=require('mongoose');
const express=require('express');
const app=express();
app.use(express.json());

    const mongourl='mongodb://localhost:27017/SureTrust1';
    mongoose.connect(mongourl,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.warn("MongoDB server connected")).catch(e=>console.warn("e"));
    const Schema=mongoose.Schema;
    const userSchema=new Schema({
        Name:String,
        Age:Number,
        Qualifications:String
        });
        const User=mongoose.model('User',userSchema);
        app.post('/insert',async(req,res)=>{
            const {Name,Age,Qualifications}=req.body;
            try{
                const newdata=new User({Name,Age,Qualifications});
                await newdata.save();
                res.status(201).send('Data Inserted');
            }
            catch(err){
                res.status(600).send(err);
                }
        });
        
const port=process.env.PORT||8080;
app.listen(port,()=>console.log(`Server is running on port ${port}`)); 