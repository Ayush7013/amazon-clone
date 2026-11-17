export let cart = [{
  productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity : 2
}, {
  productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity : 1
}];

export function addtoCart(productId){
        let matchingItem;
          cart.forEach((item)=>{
              if(productId === item.id_of_product){
                  matchingItem = item;
              }
          });

          if(matchingItem){
            matchingItem.quantity_of_product += 1;
          }
          else{
            cart.push({
            id_of_product : productId,
            quantity_of_product : 1
          });
        } 
    }

export function remove_From_Cart(productId){
    const newCart = [];

    cart.forEach((cartItem)=>{
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });
    cart = newCart;
}