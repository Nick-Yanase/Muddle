const mongoose = require("mongoose");

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // evitar problemas com a forma como o MongoDB manipula URLs
      useUnifiedTopology: true, //melhorar a estabilidade e a compatibilidade com o MongoDB
    })
  }
  catch(error){
    console.error("mongo db não conectou", error.message)
  }
  process.exit(1) //Encerra o processo da aplicação com um código de saída 1, que geralmente indica uma falha. 
}

module.exports = connectDB;