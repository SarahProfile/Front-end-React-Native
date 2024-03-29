import { View, Text, Image, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import orders from ' ../../../assets/data/orders.json';
import styles from './styles';
import restaurants from '../../../assets/data/restaurants.json'

import BasketDishItem from '../../components/BasketDishItem';
import { useOrderContext } from '../../contexts/OrderContext';
import { useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';

const order = orders[0];

const OrderDetailsHeader = ({order}) => {
  
  return (
    <View>
     <View style={styles.page}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

      <View style={styles.container}>
        <Text style={styles.title}>{order.Restaurant.name}</Text>
        <Text style={styles.subtitle}>
          {order.status} &#8226 2 days agon
        </Text>

        <Text style={styles.menuTitle}>Your orders</Text>
        
      </View>
    </View>
    </View>
  )
}
const OrderDetails = () => {
  const [order, setOrder] = useState();
  const [OrderDishItems, setOrderDishItems] =  useState();
  const {getOrder} = useOrderContext();
  const route = useRoute();
  const id = route.params?.id;

  useEffect ( () =>
  {
   getOrder(id).then(setOrder);
  }, []);
  if(!order)
  {
    return <ActivityIndicator size ={"large"} color="gray"/>;
  }
    return (
        <FlatList 
         ListHeaderComponent={()=> <OrderDetailsHeader order= {order}/>}
        data= {order.dishes} renderItem={({item}) => <BasketDishItem basketDish={item}/>} />
   )

}
export default OrderDetails