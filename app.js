const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRoutes');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json())

const dbURI = 'mongodb+srv://auth-user:test123@cluster1.fmvmu6g.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err));
app.use(authRouter);
