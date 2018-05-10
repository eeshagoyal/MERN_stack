const express = require('express'); //common.js modules 

// import express from 'express';
// es2015 modules ?

const app = express();

app.get('/',(req,res) => {
	res.send({hi : 'there'});
});

const PORT = process.env.PORT || 5000;
/*environment variable 
dnamically assigned port by heroku after deployment 
or port 5000 for local development environment
*/
app.listen(PORT);
