const express= require('express');
const router = express.Router();

const data = require('../data.json').data;

const projects=data.projects;



router.get('/project/:id', (req,res) => {
    res.render('project', {
        project:projects[req.params.id],
        title:projects[req.params.id].project_name,
        description:projects[req.params.id].description,
        technologies:projects[req.params.id].technologies
    });
});

module.exports = router;