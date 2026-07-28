import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;
app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json());
const MONGO_URL=process.env.MONGO_URL ||  'mongodb://127.0.0.1:27017/ContactDB';
mongoose.connect(MONGO_URL)
.then(()=>console.log("DatabaseConnected."))
.catch((err)=>console.error(err.message));

const ContactSchema=new mongoose.Schema(
    {
        name:{type:String,required:true,trim:true},
        email:{type:String,required:true,trim:true},
        message:{type:String,required:true}},{timestamps:true}
);

const Contact=mongoose.model("Contact",ContactSchema);

app.post('/api/contacts',async (req,res)=>
{
    try{
        const {name,email,message}=req.body;
        if(!name || !email || !message){
            return res.status(400).json({success:false,error:"All fields are required."});
        }
        const newContact=new Contact({name,email,message});
        await newContact.save();

        res.status(201).json({success:true,data:newContact});
    }
    catch(err){
        res.status(500).json({success:false,error:err.message});
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.get("/api/contacts", async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json({
            success: true,
            data: contacts
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});