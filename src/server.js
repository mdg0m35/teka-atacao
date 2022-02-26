const express = require('express');


const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/teka-atacao'));

app.get('/*',(res,res)=>{
 res.sendFile(__dirname+'/dist/teka-atacao/index.html');
});

app.listen(PORT, () =>{
  console.log('Servidor Inciado na porta '+PORT);
})
