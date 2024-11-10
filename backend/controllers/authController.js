const User = require("../models/User")
const jwt = require("jsonwebtoken")

const register = async(req, res) => {
  const {nome, email, password} = req.body; //Extrai email e password do corpo da requisição (req.body). Estes dados são enviados pelo cliente (ex.: formulário de registro).
  try{
    const user = new User({nome, email, password}); // Cria novo user e prepara para ser salvo no banco
    await user.save(); //sa await para aguardar que o user.save() termine. O save() salva o novo usuário no MongoDB. O middleware que criptografa a senha (pre('save')) é executado neste ponto
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

    //Usa bcrypt.compare() para comparar a senha fornecida (password) com o hash da senha armazenado no banco (user.password)
    const isMatch = await bcrypt.compare(password, user.password) 
    if(!isMatch) return res.status(400).json({ message: "A senha esta incorreta!"})

    /*
    Usa jwt.sign() para gerar um token JWT, que inclui o ID do usuário (user._id) como payload e é assinado com a chave JWT_SECRET. Esse token é válido por 1 hora.
    
    Esse token será retornado para o cliente, que poderá usá-lo para acessar rotas protegidas.
    */
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h'})
    res.status(200).json({token});
  
  }catch(error){
    res.status(500).json({ message: "erro ao logar", error})
  }
}

module.exports = {register, login}