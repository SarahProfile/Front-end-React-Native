import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import RestaurantdetialsScreen from '../screens/RestaurantdetialsScreen';
import Basket from '../screens/Basket';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import {Foundation} from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { useAuthContext } from '../contexts/AuthContext';


import OrderDetails from '../screens/OrderDetails';

const Stack = createNativeStackNavigator();


const RootNavigator = () =>
{
    const {dbUser} = useAuthContext () ;
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {dbUser ? (
              <Stack.Screen name="HomeTabs" component={HomeTabs}/>
            ) : (
                <Stack.Screen name="profile" component={ProfileScreen} />
            )}
            
            
            <Stack.Screen 
            name="Restaurant" 
            component={RestaurantdetialsScreen}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};
const Tab = createMaterialBottomTabNavigator();
const HomeTabs = () =>
{
    return(
        <Tab.Navigator screenOptions={{HeaderShown:false}} barStyle={ {backgroundColor:'white'}}>
            <Tab.Screen
             name='Home' HomeStackNavigator
            component={HomeStackNavigator }
            options={{
                tabBarIcon: ({color}) => <Foundation name="home" size={24} color={color} />,
                }}
                />
            <Tab.Screen name='Orders' 
            component={OrderStackNavigator}
            options={{
                tabBarIcon: ({color}) => <MaterialIcons name="list-alt" size={24} color={color} />,
                }}
            />
            <Tab.Screen name='Profile' 
            component={ProfileScreen} 
            options={{
                tabBarIcon: ({color}) => <FontAwesome5 name="user-alt" size={24} color={color} />,
                }}
            />
        </Tab.Navigator>
    )
            }
            const HomeStack = createNativeStackNavigator();
            const HomeStackNavigator = () => {
                return(
                    <HomeStack.Navigator>
                    <HomeStack.Screen name="Restaurants" component={HomeScreen} />
                    <HomeStack.Screen name="Restaurant Details"  component={RestaurantdetialsScreen} options={{HeaderShown:false}}/>
                    <HomeStack.Screen name="Dish"  component={DishDetailsScreen}/>
                    <HomeStack.Screen name="Basket"  component={Basket}/>
                    </HomeStack.Navigator>
                );
            };
            const Ordertack = createNativeStackNavigator();
            const OrderStackNavigator = () => {
                return(
                    <Ordertack.Navigator>
                    <Ordertack.Screen name="Orders" component={OrdersScreen}/>
                    <Ordertack.Screen name="Order"  component={OrderDetails}/>
                   
                    </Ordertack.Navigator>
                );
            };
export default RootNavigator;