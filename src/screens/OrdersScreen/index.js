import { View, Text,FlatList } from 'react-native'
import React from 'react'
import OrderListItem from '../../components/OrderListitem'
import { useOrderContext } from '../../contexts/OrderContext';

const OrderScreen = () => {
  const {orders} = useOrderContext();
  return (
    <View style={{ flex:1, width:"100%"}}>
      <FlatList data={orders} renderItem={({item}) => <OrderListItem order={item}/>}
      />
    </View>
  );
};

export default OrderScreen