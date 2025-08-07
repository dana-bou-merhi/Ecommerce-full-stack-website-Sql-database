import db from '../utils/databasetable.js';
import { Product } from '../models/productmodel.js';

const getproductsAdmin=(req,res)=>{

  const userid = req.session.userid;
  const islogged =req.session.isloggedin;
  const email=req.session.email;

  if(!islogged || email!='dana@gmail.com' || userid!=1){
      return res.status(401).send({message:'You are not an admin . You dont have access to this page'})
  }
   let productarray=[];

  Product.getProducts()
  .then((result)=>{
  
      productarray=result[0];
      return res.send(productarray);
  }).catch((err)=>res.status(404).send({message:"error in fetching from database"}))
  
  }

const addproducts=(req,res)=>{

  const userid = req.session.userid;
  const islogged =req.session.isloggedin;
  const email=req.session.email;

  if(!islogged || email!='dana@gmail.com' || userid!=1){
      return res.status(401).send({message:'You are not an admin . You dont have access to this page'})
  }
  console.log('hello admin you have the access');

if(!req.body.name || !req.body.price || !req.body.cat || !req.body.desc || !req.body.image)
 return res.status(404).send({message:'all field are required'});


  const prod =new Product(null,req.body.name,req.body.price,req.body.cat,req.body.desc,req.body.image);

  prod.addProducts()


    .then((result) => {
      console.log('Item added:');
      return res.status(201).send({ message: 'Item added successfully' });
    })
    .catch((err) => {
      console.log('Error occurs:', err);
      return res.status(500).send({ message: 'Error occurs upon adding the item' });
    });

}


const getEdittedproduct=(req,res)=>{
  
const pid=req.params.productid;
console.log('selecte items id is',pid);

Product.getEditProduct(pid)

.then((result)=>
{
  return res.status(201).send(result[0][0]);
}).catch((err)=>{return res.status(404).send({message:"error occurs"})});
}


const editproduct=(req,res)=>{


const proid=req.params.productid;
console.log('item id  want to be editted is',proid);

Product.updateProduct(req.body.name,req.body.price,req.body.cat,req.body.desc,req.body.image,proid)
.then((result)=>{

 return res.status(201).send({message:"Updated Successfully"})

}).catch((error)=>{
  return res.status(404).send({message:"Error occurs"})
})


}


const deleteproduct =(req,res)=>{

const id=req.params.productid;
console.log('the deleted product id is',id);
Product.deleteProduct(id)

.then((result)=> 
{ res.status(201).send({message:"Item Deleted Successfully"})} )
.catch((err)=> {
   res.status(404).send({message:"Error occurs upon deleting try again later"})
})

}

export  {addproducts,getEdittedproduct,editproduct,deleteproduct,getproductsAdmin};

