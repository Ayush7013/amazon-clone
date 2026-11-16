export const cart = [];

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