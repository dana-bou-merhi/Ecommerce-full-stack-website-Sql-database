import db from '../utils/databasetable.js';
import { Product } from '../models/productmodel.js';
import { Card } from '../models/cardmodel.js';
const getproducts=(req,res)=>{
   // console.log('req session from shop routee isss----');
    //console.log(req.session);
    
    let productarray=[];

    Product.getProducts()
    .then((result)=>{
        productarray=result[0];
      
        return res.send(productarray);
    }).catch((err)=>res.status(404).send({message:"error in fetching from database"}))
    
    }


const addtocard=(req,res)=>{
    const isloggedin=req.session.isloggedin;
    
    console.log('add to cart session check');
    console.log(isloggedin);
    if(!isloggedin){
      return  res.status(401).send({message:"Loggin to be able to add to your card"});
    }
console.log('you are able to add to your card');

const uid=req.session.userid;
const pid=req.params.productid;


const card =new Card(null,pid,1,uid);
card.addToCard()

//db.execute(insert,[pid,1,uid])
.then((data)=>{
return res.status(201).send({message:"Item added to card successfully"});

}).catch((err)=>{
    return res.status(404).send(err.message);
})


}
const viewshoppingcard =(req,res)=>{
    const userId = req.session.userid;
    const islogged =req.session.isloggedin;
    if(!islogged){
        return res.status(401).send({message:'Loggin to view the shopping card'})
    }

      
Card.ViewCard(userId)

.then((result)=>{
    return res.status(201).send(result[0]);
}).catch((err) =>{
    return res.status(404).send({message:"Error occurs"});
})

}

const viewproduct=(req,res)=>{

    const proid =req.params.productid;
    console.log('product id is');
    console.log(proid);

    Product.viewSpecifiedProduct(proid)
  
    
    .then((result)=>{
      if(result[0].length>0)
        return res.status(202).send(result[0][0]);
else 
{
    return res.status(404).send({message:"Product not found"});
}
    }).catch((err) => {
        console.error("Database Error:", err.message);
        return res.status(505).send(err.message)})
}


const deletefromcart=(req,res)=>{
    const pid=req.query.productid;
 

   Card.deleteFromCard(pid)
 
    .then((result)=>{
        res.status(202).send({message:"Product deleted sucssesfully from card"})
    }).catch((err)=>
    res.status(404).send({message:"Error occurs upon fetching"})
    )


}

//send product id in the query 
const addquantity=(req,res)=>{
    const pid=req.query.productid;

    Card.addQuantity(pid)
 
    .then((result) =>{
        res.status(202).send({message:"quantity is updated successfully"})
    }).catch((err)=>{
        res.status(404).send({message:"Error upon updating"})
    })

}

const reducequantity=(req,res)=>{

    const pid=req.query.productid;
    const quantity=req.query.quantity;
    const q=`update card set quantity=? where productid=?`;
 if(quantity <=1){
 return   res.status(401).send({message:"Can't decrese the quantity anymore! Remove the item instead."})

 }
 Card.reduceQuantity(quantity,pid)

 //db.execute(q,[quantity-1,pid])
 .then((result)=>{
 return res.status(202).send({message:"Quantity is reducedd successfully"})

 }).catch((err)=>{return res.status(404).send({message:"Error upon reading the quantity"})})
  
}

const serach=(req,res)=>{
    const nom=req.query.searchquery;
  
    console.log('search query name is ')
    console.log(nom);

    Product.searchProduct(req.query.searchquery)
    .then((result)=>{
        return res.status(202).send(result[0]);
    }).catch((err)=> {
        res.status(404).send({message:"Error occurs upon fetching the product"})
    })

}
   const addCheckout =(req,res)=>{

    const uid =req.session.userid;
    const isloggedin =req.session.isloggedin;
    const email =req.session.email;
    if(!isloggedin){
        return res.status(404).send({message:"You are not logged in"})
    }
   // console.log(req.body);
    //console.log(req.session);
    console.log({
        userid: uid,
        email: email,
        name: req.body.name,
        appartment: req.body.appartment,
        town: req.body.town,
        phone: req.body.phone,
        price: req.body.price,
    });
    

 db.execute('INSERT INTO orders (userid,email,ordername,appartment,town,phone,totalprice) values (?,?,?,?,?,?,?)',[uid,email,req.body.name,req.body.appartment,req.body.town,req.body.phone,parseInt(req.body.price)])
 .then((result)=>{
    return res.status(202).send({message:"Order completed successfully. We will call you soon."})
 })
.catch((err)=>{
    console.error("Database error:", err);
    return res.status(404).send({message:"Error ocuurs upon adding to the database"})
   })

   }

    export  {getproducts,addquantity,viewproduct,addtocard,deletefromcart,serach,viewshoppingcard,reducequantity,addCheckout};