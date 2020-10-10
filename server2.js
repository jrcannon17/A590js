const a = require('express');
const b = a();
const c = 27207;

//b.get('/how/are/you', (req, res) => res.send('Hello world!'));

b.route('/what/up')
.get((req, res) => res.send('GET here...'))
.post((req, res) => res.send('POST in action'));


b.listen( c , () => console.info( 'Server listening on', c,'.' ) );
