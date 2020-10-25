const express= require('express');
const router = express.Router();

const data = require('../data.json').data;

const projects=data.projects;

router.get('/', (req,res) => {
    res.render('index', {

        id: projects[0].id,
        title: projects[0].project_name
    });
});

module.exports = router;