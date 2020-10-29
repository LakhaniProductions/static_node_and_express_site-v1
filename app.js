// A varaible that states this app requires express
const express = require('express');

//Calling Express
const app = express();

// Setting route for static elements to the public folder
app.use('/static',express.static('public'));

// Setting our view engine to pug
app.set('view engine', 'pug');

//Setting uup all required routes
const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project');

app.use(mainRoutes);
app.use(aboutRoutes);
app.use(projectRoutes);


//New error constructor
app.use((req,res,next) =>{
    const err = new Error();
    err.status=404;
    err.message = 'Page not found'
    next(err);
});

// Handling Errors
app.use((err,req,res,next)=>{
    res.locals.error = err;
    res.status(err.status);
    if (err.status === 404) {
        res.render('page-not-found', err);
    } else {
        err.message= 'Sorry, there\'s an error.'
        res.status(err.status =500);
        res.render('error', err);
    }
   
});

//Listening on port 3000
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});