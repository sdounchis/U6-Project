//require express and set router to router
//set const data to quire data.json
const express = require('express');
const router = express.Router();
const data = require('../data.json');
const projects = data.projects


//render index.pug template
router.get('/', (req, res) => {
      res.render('index', { projects });

});

//render about.pug template
router.get('/about', (req, res) => {
      res.render('about');
});

//render project.pug template when project's link is clicked
router.get('/projects/:id', (req, res) => {
    const id = req.params.id
    const project = projects[id]

    res.render('project', { project });
});

module.exports = router;