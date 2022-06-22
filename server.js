import app from './app';

const port = 3001; // Definimos uma porta para ser usada
app.listen(port, () => { // Express ouça na (Recebe o parametro "port" )
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
