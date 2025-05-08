require('dotenv').config();

function validateAPIKey(req, res, next) {
  const apiKey = req.header('X-Parse-REST-API-Key');
  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ error: 'API Key inválida' });
  }
  next();
}

module.exports = validateAPIKey;
