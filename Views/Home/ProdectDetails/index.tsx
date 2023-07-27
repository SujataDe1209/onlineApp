import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import MainRoute from '../..'
import DisplayAnImage from './Image'

const ProdectDetails = () => {
  return (

    <DisplayAnImage />



    // <View>
    // <Image 
    // source = {require('./Images/images.jpeg ')}/> 
    // </View>
    // <View>
    //   <Text style = {style.product}>
    //     Product Details</Text>
    //     <MainRoute/>
     //</View>
  )
}


const style = StyleSheet.create({
    product:{fontSize:20,color:'white', padding:20,
    backgroundColor:'#f77d02',textAlign: 'center'
    }
})


export default ProdectDetails