import express from 'express';
import {router} from "./src/router/router";
import bodyParser from "body-parser";
import fileUpload from 'express-fileupload';
import mongoose from "mongoose";
import session from "express-session";

const app = express();
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/blog_db').then(()=>{
    console.log('Connected database!!!')
})
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(fileUpload({
    createParentPath: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'somesecret',
    cookie: { maxAge: 60000 }}));
app.use('',router);

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/users/login')
})