const express = require ('express');
const authRoute = require('./src/routes/auth.route.js')

const app = express();
app.use(express.json());
app.use(authRoute)

app.listen(3000, ()=>console.log('Servidor rodando na porta 3000.'))