import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import ProdectDetails from './Home/ProdectDetails';
import ProductListing from './Home/Product_listing';

const Stack = createStackNavigator();

const MainRoute = () => {
  return (
     <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#f77d02'
           
        }
     }}>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="ProdectDetails" component={ProdectDetails}/>
      

      {/* <Stack.Screen name="ProductListing" component={ProductListing}  />
      <Stack.Screen name="ProdectDetails" component={ProdectDetails}  /> */}
      
    
    </Stack.Navigator>
    
  )
}

export default MainRoute

