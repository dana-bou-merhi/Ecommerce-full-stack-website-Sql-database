import db from '../utils/databasetable.js';
export class Product {
constructor(id,name,price,category,description,image){
    this.id=id;
    this.name=name;
    this.price=price;
    this.category=category;
    this.description=description;
    this.image=image;
}

static getProducts()
{
  const query =`select * from products`;
  return db.execute(query);
}


addProducts(){
    const q = `INSERT INTO products (name, price, category, description, image) VALUES (?, ?, ?, ?, ?)`;
    const product = [this.name, parseInt(this.price), this.category,this.description,this.image];
  
  return  db.execute(q, product)

}

static viewSpecifiedProduct(id){
    return db.execute(`select * from products where id=?`,[id]);
}

static searchProduct(query){
    //return  db.execute('Select * from products where name like? or description like ? or category like ? or price < ?',[`%${query}%`,`%${query}%`,`%${query}`,parseInt(`%${query}`)])

const isNumeric = !isNaN(query);

if (isNumeric) {
  
  return db.execute(
    'SELECT * FROM products WHERE name LIKE ?  OR category LIKE ? OR price <= ?',
    [`%${query}%`, `%${query}%`, parseFloat(query)]
  );
} else {
 
  return db.execute(
    'SELECT * FROM products WHERE name LIKE ? OR description LIKE ? OR category LIKE ?',
    [`%${query}%`, `%${query}%`, `%${query}%`]
  );
}


}

static getEditProduct(id){

    const q=`select name, price,category, description, image from products where id=?`;
return db.execute(q,[id]);

}

static updateProduct(name,price,category,desc,image,id){

    const values= [name, parseInt(price), category,desc,image,id ];

return db.execute(`update products set name= ?,price= ?,category= ? ,description= ?,image= ? where id=?`,values)
}

static deleteProduct(id){
    return db.execute('delete from products where id=?',[id]);
}

}