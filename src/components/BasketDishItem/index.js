

import { View , Text, StyleSheet, FlatList} from 'react-native';

const BasketDishItem = ({basketDish}) => 
{
  return ( 
    <View style={styles.row}>
    <Text style={styles.quantityContainer}>
    {basketDish.quantity}
    </Text>
    <Text style={{fontWeight:'600'}}> {basketDish.Dish.name}</Text>
    <Text style={{marginLeft:"auto"}}>${basketDish.Dish.price}</Text>
  </View>
 
 
  );
};

const styles = StyleSheet.create(
    {
      row:
      {
        flexDirection:'row',
        alignItems:'center',
        marginTop:50,
      },
   
   
      quantityContainer:
      {
        backgroundColor:'lightgrey',
        paddingHorizontal: 5,
        marginRight:10,
        paddingVertical:2,
        borderRadius:3,
      }
    }
  );
  export default BasketDishItem;