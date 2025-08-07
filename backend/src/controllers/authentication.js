
import db from '../utils/databasetable.js'
import bycryt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/usermodel.js';
const salt =5;
const register =(req,res)=>{
    console.log(req.body);
        if (!req.body.username || !req.body.email || !req.body.password) {
            return res.status(400).send({ message: "Username ,Email and password are required" });
        }
    
        const email = req.body.email;
        
       
         User.selectUser(email)

            .then(([rows]) => {
                if (rows.length > 0) {
                 
                    return res.status(409).send({ message: "You already have an account" });
                } else {
                   bycryt.hash(req.body.password.toString(),salt,(err,hash) =>{
                if(err){
                     return res.status(401).send({Error:err})
                        }
                        else
                        {
                            const user =new User(req.body.username,email,hash); 

                            user.saveUser()
                            
                            .then(() =>  res.status(201).send({ message: "Account created successfully" }))
                            .catch((err) => {
                                console.error(err);
                                res.status(500).send({ message: "Database error during account creation" });
                            });
    
                        }
    
                   })
    
                }
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send({ message: "Database error during execution" });
            });
    
    
    
    
    
    }


    const login =(req,res)=>{

        //console.log(req.body);
            if(!req.body.email || !req.body.password)
                  {
                     return   res.status(404).send({message:"Enter a value the field are required"});
                   
                   }
                  
                   const email =req.body.email;

                    User.selectUser(email)

               
                 .then((result)=>
             {
        
                   if(result[0].length===0){
                    return res.status(404).send({message:"Register before logging in"})
                     }
                    const userid=result[0][0].userid;
                    bycryt.compare(req.body.password.toString(),result[0][0].password,(err,response)=>{
                   if(err) return res.status(500).json({Error:"Error comparing passwords"})
                     if(response)  
                     {   req.session.userid=userid;
                         req.session.email = email;
                        req.session.isloggedin=true;
        
                        console.log('loginn page sesionn');
                        console.log(req.session)
                              
                           if(email==='dana@gmail.com')
                           {return res.json({login:req.session.isloggedin,useremail:req.session.email,message:'You are Loggedin as an admin .You have access to the admin page'})}
                      
        
                         return res.json({login:req.session.isloggedin ,useremail:req.session.email,message:'You are Loggedin as default user'})
                        }
                       
        
                           return res.status(404).json({Error:"Wrong password"})
                                     })
        
                   }).catch((err)=>{
                    return res.status(500).send({message:"Error occurs upon fetching from database"})
                   })
        
        }


        const logout =(req, res) => {
            console.log('destroy session route');
          
            if (!req.session) {
              return res.status(400).send({ message: "No active session to clear." });
            }
          
            req.session.destroy((err) => {
              if (err) {
                console.error("Error destroying session:", err);
                return res.status(500).send({ message: "Error occurred while logging out. Try again later." });
              }
          
              res.clearCookie('session'); 
              console.log("Session destroyed and cookie cleared.");
              return res.status(200).send({ message: "Logged out successfully." });
            });
          }




export  {register,login,logout};