import dotenv from 'dotenv';
import express from 'express';
import db_connection from './db/db_connection.js';
import User from './models/user_models.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.listen(8080, ()=>{
    console.log("App listening at PORT 8080");
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

db_connection();

app.get('/', (req, res)=>{
    res.send("Hi User!, Welcome");
})

app.post('/new-user', async(req, res)=>{
   let {username, email, password} = req.body;
   const newUser = await User.create({
     username: username,
     email: email,
     password: password,
   });

   const op = await newUser.save();
   console.log(op);
});


app.post('/verify-user', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email }); 
  
      if (!user) {
        return res.status(404).json({ message: "User does not exist!" });
      }
  
      if (user.password === password) {
        return res.status(200).json({ message: "Logged in successfully!" });
      } else {
        return res.status(401).json({ message: "Invalid access! Wrong credentials." });
      }
    } catch (error) {
      console.error("Error in verifying user:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  

