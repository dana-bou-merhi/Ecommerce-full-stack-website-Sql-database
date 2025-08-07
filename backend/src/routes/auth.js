
import express from 'express';
import { login, logout, register } from '../controllers/authentication.js';
import db from '../utils/databasetable.js'
import bycryt, { hash } from 'bcrypt';
const router =express.Router();
const salt = 5;


router.post('/register',register);


router.post('/login',login);


router.get('/logout', logout);
  


export default router;

