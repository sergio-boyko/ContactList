var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'learn'
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
/* GET list of users */
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM company', function (error, results, fields) {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      }
      res.send({data: results});
    });
});
/* GET user by id */
router.get('/:id', function(req, res, next) {
    connection.query('SELECT * FROM company WHERE id = ?', [req.params.id], function (error, results, fields) {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      }
      res.send(results);
    });
});
/* POST create user */
router.post('/', function(req, res, next) {
    connection.query('INSERT INTO company set ?', [req.body], function (error, results, fields) {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      }
      res.sendStatus(200);
    });
});
/* PUT update user by id */
router.put('/:id', function(req, res, next) {
    connection.query('UPDATE company SET ? WHERE id = ?', [req.body, req.params.id], function (error, results, fields) {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      }
      res.sendStatus(200);
    });
});
/* DELETE remove user by id*/
router.delete('/:id', function(req, res, next) {
    connection.query('DELETE FROM company WHERE id = ?', [req.params.id], function (error, results, fields) {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      }
      res.sendStatus(200);
    });
});

module.exports = router;
