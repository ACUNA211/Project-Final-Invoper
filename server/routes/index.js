var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */

router.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

router.get('/api/tools', (req, res) => {
  const sql = 'SELECT * FROM inventory'; // Replace 'tools' with your actual table
  db.query(sql, (err, results) => {
    if (err) {
      console.error('DB error:', err);
      res.status(500).json({ error: 'Database query failed' });
      return;
    }
    res.json(results);
  });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
