const express= require('express');
const router = express.Router();

const data = require('../data.json').data;

const projects=data.projects;

router.get('/', (req,res) => {
    res.render('index', {
        projects: projects,
        title: projects.project_name
    });
});

module.exports = router;