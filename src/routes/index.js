const express = require('express');
const router = express.Router();
const model = require('./../model/task')();

router.get('/', (req, res) => {
  model.find({}, (err,tasks) => {
    if(err) throw err;
    res.render('index', {
      title: 'CRUD',
      name: 'Alejandra',
      task: tasks
     })
  });
});

module.exports = router;