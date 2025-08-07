
const handleImageClick = (productid,navigate) => {
    if (productid) {
      navigate(`/product-detail/${productid}`); 
    } else {
      console.error('Product ID is missing');
      return;
    }
  };


  const handleAddToCard=(productid)=>{

    fetch(`http://localhost:8081/add-to-cart/${productid}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      credentials:'include'
    }).then((res)=>res.json()).then((data)=>{
  
      alert(data.message);
    }).catch((err)=>{
      console.log(err.message);
      
      alert('Failed to add items to card try again later')
       });
  
     }


     const handleSearchProduct=(serachfield)=>{
      fetch(`htttp://localhost:8081/search-products/?${serachfield}`).then((res)=>res.json)
      .then((result)=>
      {
        return result;
      }).catch((err)=> {
       alert(err.message);
       return;
      })
     
     }  

     export {handleAddToCard,handleImageClick,handleSearchProduct};
