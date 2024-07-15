const mongoose=require('mongoose');
const insert=async()=>{
    await mongoose.connect("mongodb://localhost:27017/SureTrust1");
    const userSchema=new mongoose.Schema({
        Name:String,
        Age:Number,
        Qualifications:String
        });
        const User=mongoose.model('User',userSchema);
        const user=new User({Name:'Tejaswini',Age:20,Qualifications:'B.Tech'});
        var a=await user.save();
        console.log(a);
}
insert();