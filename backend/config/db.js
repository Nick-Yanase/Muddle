const mongoose = require("mongoose");

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // evitar problemas com a forma como o MongoDB manipula URLs
      useUnifiedTopology: true, //melhorar a estabilidade e a compatibilidade com o MongoDB
    })
    console.log("conectou com sucesso")
  }
  catch(error){
    console.error("mongo db não conectou", error.message)
  }
}

module.exports = connectDB;