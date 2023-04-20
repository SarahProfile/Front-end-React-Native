import { createContext, useContext, useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import {Order, OrderDish, Basket, BasketDish} from '../models';
import { useAuthContext } from "./AuthContext";
import { useBasketContext } from "./BasketContext";



const OrderContext = createContext({

   
});

orderContextProvider = (children) => {
    
   const {dbUser} = useAuthContext();
   const {restaurant, totalPrice, basketDishes, basket} = useBasketContext();
   const [orders, setOrders]= useState([]);
   useEffect( () => 
   {
     DataStore.query(Order, o => o.userID ("eq", dbUser.id )).then(setOrders);
   }, [])
   const createOrder = async () => {

     //creat the order
     const newOrder = await DataStore.save(new Order(
        {
            userID :dbUser.id,
            Restaurant:restaurant,
            status: 'NEW',
            total: totalPrice,
        }
     

     ));


     //add all basketdishes to the order
 
       await Promise.all(basketDishes.map(BasketDish => DataStore.save(new OrderDish({
        quantity:basketDish.quantity, 
        orderID: newOrder.id, 
        Dish: basketDish.Dish ,
          }))))
     //delete the basket
     await DataStore.delete(basket);
     setOrders([...orders, newOrder]);
   };
   const getOrder= async(id) =>{
    const order= await DataStore.query(Order, id);
    const orderDishes= await DataStore.query(OrderDish, od => od.orderID("eq", id));
    return {...order, dishes: orderDishes};
   };
   
  return(
     <OrderContext.Provider  value={{createOrder, orders, getOrder}}>
      {children}
     </OrderContext.Provider>

    )
}

export default orderContextProvider;
export const useOrderContext = () => useContext(OrderContext);