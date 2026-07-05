const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const port = 5000;

app.use(express.json());

mongoose.connect("mongodb+srv://sahoopriyabrata:Sahoo%40123@cluster0.l5cbiaz.mongodb.net/testpractice")
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));


const userSchema = new mongoose.Schema({
  name:{
   type:String,
   required:true,
   minlength:[3,"Name Must be at least 2 character"]
  },
  email:{
    type:String,
    required:[true,"Email Must be there"],
    lowercase:true,
    unique:true
  },
  password:{
  type:String,
   required:[true,"Password Must be there"],
   minlength:[6,"Password Must be 6 character."],
  },
   age:{
    type:Number,
    required:[true,"Password Must be there"],
    min:[18,"age must be minimum 18 or above"],
   },
  role:{
    type:String, 
    enum:["Student","Mentor","Admin"],
    default:"Student"

  },
  course:{
    type:String,
    enum:["MERN","Java","Python","Data Science"],
  },
  isActive:{
   type:Boolean,
   default:true,
  }
})

const User = mongoose.model("User",userSchema);
 
// 1  Add Student
app.post("/add-user", async (req, res) => {

    const {name,email,password,age,role,course} = req.body;
    if(!name){
        return res.status(404).json({message:"Name is required"});
    }
     if(!email){
        return res.status(404).json({message:"Email is required"});
    }
     if(!password){
        return res.status(404).json({message:"Password is required"});
    }
     if(!age){
        return res.status(404).json({message:"age is required"});
    }
     if(!role){
        return res.status(404).json({message:"Role is required"});
    }
     if(!course){
        return res.status(404).json({message:"Course is required"});
    }

         try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.json({ error: error.message });
  }
    
});


app.get("/product", async(req,res) =>{
  try {
    const {category,brand} = req.query
    console.log(brand);
  }
  if(!category){

  }
  const products = await Product.find({
    catergory:category,
    brand:brand
  });
})

// 2. Add Multiple Students

app.post("/addmultipleusers",async (req,res)=>{
  try{
  const users = await User.insertMany(req.body);  
  res.json(users)
  } catch(err){
    res.status(400).send(err)
  }
})
    
//3. Get all users

app.get('/get-users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
    } catch (err) {
    res.status(500).send(err);
    }
});

// 4. Get Student By ID

app.get("/users/:id",async(req,res)=>{
  try{
    const user = await User.findById(req.params.id);
    if(!user){
      return res.status(404).json({message:"User not found"});
    }
    res.json(user);
  }catch(err){
    res.status(500).send(err);
  }
})

// 5. Get Students By Course

app.get("/users/course/:courseName",async(req,res) => {
    try{
        const users = await User.find({ course: req.params.courseName });
        res.status(200).json(users);
    } catch(err){
        res.status(500).send(err);
    }
})

//6. Update Student

app.put("/userupdate/:id",async(req,res)=>{
  const userId = req.params.id; 
  try {
    const Updateuser = await User.findByIdAndUpdate(userId,req.body,{new:true})
    res.json(Updateuser)
  } catch (error) {
    res.status(500).send(error)
  }
})


//7.Delete Student

app.delete("/userdelete/:id",async(req,res)=>{
  try {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  res.json(deletedUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});