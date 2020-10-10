const express = require('express');
const app = express();
const router = express.Router();
const port = 27207;
const data = require('./data');

/*
router.get('/there', (req, res) => res.send('Hello yourself.'));
router.get('/adrian', (req, res) => res.send('Hello, Adrian!'));
*/
router.get('/data', (req, res) => res.send(data));


app.use('/hello', router);

router.get('/data/:age', (req, res) => {
    const age = +req.params.age; // why do we need +?
    const who = data.filter(d => d.age == age);
    return res.send(who);
    });
    
router.get('/data', (req, res) => {
    console.log(req.query);
    console.log(req.query.page);
    return res.send(data);
});

//app.use('/something', express.static('files'));
//app.use('/something', router);
//router.get('/files',(req,res) => res.send(Hero.JPG));

app.listen(port, () => console.info('Server listening on', port,'.'));

// b.listen(c,() => console.info('Server listening on ${c}.'));

