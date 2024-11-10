const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");

//cria uma collection com esses campos
const UserSchema = new mongoose.Schema({
  nome:{type: String, required: true},
  email:{type: String, required: true, unique:true},
  password:{type: String, required: true}
})

//esse middleware é executado antes de salvar os dados no banco, vai verificar se houve modificação, senão houver não faz nada e deixa prosseguir, se houver uma alteração (como um update na senha ou um novo cadastro) ele criptografa a senha e salva no banco
UserSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next()
})

module.exports = mongoose.model("User", UserSchema);
