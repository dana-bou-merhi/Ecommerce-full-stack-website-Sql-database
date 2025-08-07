import db from '../utils/databasetable.js';
export class Card{
    constructor(cardid,productid,quantity,userid){
        this.cardid=cardid;
        this.productid=productid;
        this.quantity=quantity;
        this.userid=userid;
    }

addToCard(){
    const insert =`insert into card (productid,quantity,userid) values (?,?,?)`;
return db.execute(insert,[this.productid,this.quantity,this.userid]);
}

static ViewCard(uid){
    const query =`SELECT products.id, products.name, products.price, products.category, products.image,card.quantity 
    FROM products INNER JOIN card ON products.id = card.productid where card.userid=?;`;

return db.execute(query,[uid])

}

static deleteFromCard(pid){
    const q=`delete from card where productid=?`;
 return   db.execute(q,[pid])
}
static addQuantity(pid){
    const query =`update card set quantity=quantity +1 where productid=?`;
   return db.execute(query,[pid])
}

static reduceQuantity(quantity,pid){
    const q=`update card set quantity=? where productid=?`;
  return  db.execute(q,[quantity-1,pid])
}

}