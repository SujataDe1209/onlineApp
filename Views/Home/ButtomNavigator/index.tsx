import { View, Text } from 'react-native'
import React from 'react'
import ProdectDetails from '../ProdectDetails';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '..';
import ProductListing from '../Product_listing';

const Tab =  createBottomTabNavigator();

const ButtomNavigator = () => {
  return (
   <Tab.Navigator>
    <Tab.Screen name='Home'component={ProductListing}/>
    <Tab.Screen name='ProdectDetails'component={ProdectDetails}/>
   </Tab.Navigator>
  )
}

export default ButtomNavigator