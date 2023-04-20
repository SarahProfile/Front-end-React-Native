import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const RestaurantItem = ({restaurant}) => {
  const navigation = useNavigation();
    const onPress = () =>
    {
      navigation.navigate("Restaurant", {id:restaurant.id});
    }
  return(
    <Pressable onPress={onPress}style={styles.restaurantContainer}>
    <Image source={{uri:restaurant.image}}
    style={styles.image}
    />
    <View style={styles.row}>
    <View>
    <Text style={styles.name}>{restaurant.title}</Text>

    <Text style={styles.price}>${restaurant.deliveryFee} 
    {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} Min
    </Text>
     </View>
     <View style={styles.rating}>
        <Text > {restaurant.rating}</Text>
     </View>
     </View>
  </Pressable>
  
  );
};
export default RestaurantItem;
const styles = StyleSheet.create({
   
    restaurantContainer:
    {
      width:'100%',
      marginVertical:10,
    },
    image:
    {
      width:"100%",
      aspectRatio:5/3,
      marginBottom:5,
    },
    name:
    {fontSize:18,
      fontWeight:'bold', 
      marginVertical:5,
    },
    price:
    {
      fontSize:15,
      color:"grey",
    },
    row:
    {
        flexDirection:'row',
        alignItems:'center',
    },
    rating:
    {
        marginLeft:"auto",
        backgroundColor:"lightgray",
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,

    }
  });
  