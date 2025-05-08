module.exports = (req, res, next) => {
  const apiKey = req.header('X-Parse-REST-API-Key');
  if (apiKey !== '2f5ae96c-b558-4c7b-a590-a501ae1c3f6c') {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
};

