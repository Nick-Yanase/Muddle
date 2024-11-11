const express = require("express")

//função é responsável por conectar a aplicação ao banco de dados MongoDB.
const connectDB = require("./config/db") 

//Importa as rotas de autenticação (authRoutes) do arquivo ./routes/authRoutes. Esse arquivo define as rotas para o registro e login de usuários, que estarão acessíveis em /api/auth.
const authRoutes = require("./routes/authRoutes")

//Importa o módulo dotenv e carrega as variáveis de ambiente definidas no arquivo .env. Isso permite acessar variáveis sensíveis, como a URL do MongoDB e a chave JWT, através de process.env.
require("dotenv").config();

connectDB();

//Cria uma nova instância da aplicação Express. Essa instância app representa o servidor e será usada para configurar rotas, middlewares e iniciar o servidor.
const app = express();

 // Permite requisições de qualquer origem
app.use(cors());

//Configura o middleware express.json() para que o servidor entenda dados JSON no corpo das requisições. 
app.use(express.json())

//Define um prefixo /api/auth para as rotas de autenticação (authRoutes). Com isso, qualquer rota definida em authRoutes estará disponível com o caminho /api/auth. Por exemplo, se authRoutes tem uma rota para login, ela estará acessível como /api/auth/login.
app.use("api/auth", authRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server rodando na porta ${PORT}`))