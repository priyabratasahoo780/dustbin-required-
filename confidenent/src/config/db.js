const ConnectDB = async() => {
  try{
    await mongoose.connect("mongodb://localhost:27017/confidenent");
    console.log("Database connected successfully");
  }
  catch(error){
    console.log("Database connection failed");
  }
}

module.exports = connectDB;