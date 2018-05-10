const express = require('express'); //common.js modules 

// import express from 'express';
// es2015 modules ?

const app = express();

app.get('/',(req,res) => {
	res.send({hi : 'there'});
});

app.listen(5000);
