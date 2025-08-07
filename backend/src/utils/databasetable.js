import express, { response } from 'express';
import mysql from 'mysql2';


const databse=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"dandouna2004",
    database:"webecommproject",
   
})

export default databse.promise();