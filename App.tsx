/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ProdectDetails from './Views/Home/ProdectDetails';
import MainRoute from './Views';
import ButtomNavigator from './Views/Home/ButtomNavigator';







const App = () =>{

  return (
    <NavigationContainer>

     <MainRoute/> 
     
      
    
     

    </NavigationContainer>

  );
}


export default App;
