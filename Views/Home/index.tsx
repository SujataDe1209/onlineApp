import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MainRoute from '..'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ButtomNavigator from './ButtomNavigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductListing from './Product_listing'
import ProdectDetails from './ProdectDetails'
import Profile from '../Profile'
import Icon from 'react-native-vector-icons/Ionicons'


const Tab =  createBottomTabNavigator();

const Home = (porps:any) => {
  return (
   
     
     <Tab.Navigator  screenOptions={{
      headerStyle:{
        backgroundColor:'#f77d02'
      }
     
      
     }}>
<Tab.Screen options={{tabBarIcon:()=><Icon name="person-outline" size ={30}/>
    }} name='Profile'component={Profile}/>

    <Tab.Screen options={{tabBarIcon:()=><Icon name="layers-outline" size ={30}/>
    }} name='ProductListing'component={ProductListing}/>
    
   </Tab.Navigator>
    
  )
}
// const Home = (porps:any) => {
//   return (
//     <View>
     
//       <TouchableOpacity 
//       onPress={()=> porps.navigation.navigate('ProductListing')}>
//     <Text style = {style.product}>Go To Prodect Listing</Text>
//     </TouchableOpacity>
  

//     <ButtomNavigator/>
    
//     </View>
//   )
// }



const style = StyleSheet.create({
  product:{fontSize:20,color:'white', padding:20,margin:100,borderRadius:10,marginTop:250,
  backgroundColor:'#c20c30',textAlign: 'center'
  }
})

export default Home