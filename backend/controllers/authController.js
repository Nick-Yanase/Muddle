//

const User = require("../models/User")
const jwt = require("jsonwebtoken")

const register = async(req, res) => {
  const {email, password} = req.body;
  try{
    const user = new User({nome, email, password});
    await user.save(); //espera a execução acima terminar e salve
    res.status(201).json({message: "Usuario registrado com sucesso!"})
  }catch(error){
    res.status(400).json({message: "ERRO ao registrar usuario", error})
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  
  try{
    const user = await User.findOne({email})
    if (!user) return res.status(400).json({ message: "Usuário não encontrado"})

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) return res.status(400).json({ message: "A senha esta incorreta!"})

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h'})
    res.status(200).json({token});
  
  }catch(error){
    res.status(500).json({ message: "erro ao logar", error})
  }
}

module.exports = {register, login}