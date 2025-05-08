const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const validateAPIKey = require('../middleware/auth');

router.post('/', validateAPIKey, (req, res) => {
  const { message, to, from, timeToLifeSec } = req.body;

  if (!message || !to || !from || !timeToLifeSec) {
    return res.status(400).json({ error: 'Faltan campos en el cuerpo del mensaje' });
  }

  const token = jwt.sign(
    { to, from, timestamp: Date.now() },
    process.env.JWT_SECRET || 'secret', // por si no está seteado en test
    { expiresIn: `${timeToLifeSec}s` }
  );

  res.setHeader('X-JWT-KWY', token);

  return res.json({
    message: `Hello ${to} your message will be sent`
  });
});

router.all('/', (req, res) => {
  res.status(405).json({ error: 'ERROR' });
});

module.exports = router;
