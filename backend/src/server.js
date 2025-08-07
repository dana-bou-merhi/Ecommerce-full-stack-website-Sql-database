import express, { response } from 'express';
import cors from 'cors';
import router from './routes/auth.js';
import multer from 'multer';
import adminrouter from './routes/admin.js';
import userrouter from './routes/user.js';
import session from 'express-session';
import cookieParser from'cookie-parser';
import expressMYSQLsession from 'express-mysql-session';
//import options from './utils/databaseobject.js';

const app=express();
//const MYSQLStore =expressMYSQLsession(session);
//const sessionStor=new expressMYSQLsession(options);

app.use(express.json())
app.use(cookieParser())
app.use(
    session({
      key: "session",
      secret: "secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, 
      },
    })
  );

app.use(cors({
credentials:true,
origin:true

}));


app.use('/auth',router)
app.use('/admin',adminrouter)

app.use(userrouter);



app.listen(8081,() =>{
    console.log("listening to port 8081")
});

