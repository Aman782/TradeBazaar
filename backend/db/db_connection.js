import mongoose from 'mongoose';

const db_connection = async()=>{
    await mongoose.connect("mongodb+srv://amanpandey45692:PyAMwipEple0IXLK@cluster0.levbt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then((res)=>{
       console.log("DB Connected Successfully!");
    }).catch((err)=>{
        console.log("DB Error");
    });
}

export default db_connection;