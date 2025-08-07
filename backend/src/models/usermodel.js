import db from '../utils/databasetable.js'


export class User{
constructor (username,email,password){

this.username=username;
this.email=email;
this.password=password;

}


static selectUser(email){
    const query = `SELECT * FROM user WHERE email = ?`;
    
   return db.execute(query, [email]);
}

saveUser(){

    const values=[this.username,this.email,this.password];
 return    db.execute('INSERT INTO user (name,email, password) VALUES (?,?, ?)', values)
}


}


