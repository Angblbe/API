
//Mitjançant express() creem una aplicació API fent ús d'Express 
const express = require('express');
const app = express();

//Mirar si l'usuari te permisos (contraseña valida)
function isAuthorized(req,res, next) {
    const auth = req.headers.authorization;
    if (auth === 'secretpassword') {
      next();
    } else {
      res.status(401);
      res.send('Not permitted');
    }
}

//Port de sortida 
const port = 3000;

//Root
app.get('/', (req, res) => res.send('Hello World!'));

//Obtenir clients
app.get('/users', isAuthorized, (req,res) => {
    
    res.json([{
      
      id: 1,
      name: 'User Userson'
    }])
})
  
//Obtenir productes
app.get('/products', (req, res) => {
    res.json([{
      id: 1,
      name: 'The Bluest Eye'
    }])
})
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`));