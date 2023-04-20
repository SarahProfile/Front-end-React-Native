import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import RestaurantItem from '../../components/Reastaurantitem';
import restaurants from '../../../assets/data/restaurants.json';

export default function HomeScreen() {
  return (
   <View style={styles.page}>
   <FlatList  
   data={restaurants}
    renderItem={({item})=>  <RestaurantItem restaurant={item}/>}
    showsHorizontalScrollIndicator={false}
   
   />
   </View>
  );
}

const styles = StyleSheet.create({ 
    page:{
     padding:10,
     paddingVertical: 30,
    }
});
