require('dotenv').config();
const express = require('express');
const devopsRoute = require('./routes/devops');

const app = express();
app.use(express.json());

app.use('/DevOps', devopsRoute);

// Captura cualquier otro método o ruta no permitida
app.use((req, res) => {
  res.status(405).json({ error: 'ERROR' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
