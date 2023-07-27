import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';




const Datalink = (porps: any) => {
// console.log(porps);

const[prolist,setprolist]=useState<any>([])
  useEffect(()=>{
    try{
      axios.get('https://mocki.io/v1/e5b42f6a-6e0c-4389-8890-15de21b216ff').then((response)=>{
        setprolist(response.data);
      }).catch((err:any)=>{
        console.log(err);
      })
    }catch(err){
      console.log(err);
    }
  },[])

  return (
    <ScrollView>

        {
          prolist.map((m:any)=> (
            <ProductCard navigation={porps.navigation} key={m.id} item={m}/>
          ))
        }
      </ScrollView>
  );
};




const ProductCard =({navigation,item}: any)=>{
  console.log();
  
  return(
    <View style={{backgroundColor: '#a8d4e0', margin: 10, padding: 10, borderRadius: 5}}>
      <TouchableOpacity  onPress={()=> navigation.navigate('ProdectDetails')}>
      <View >
        <Text style={{fontWeight: '500', fontSize: 18,color:'black'}}>Product Name : {item.Prodect_Name}</Text>
      </View>
      <View>
        <Text style={{fontWeight: '500', fontSize: 18,color:'black'}}>Product Type : {item.Product_Type}</Text>
      </View>
      <View>
        <Text style={{fontWeight: '500', fontSize: 18 ,color:'black'}}>Price : {item.Price}</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}



const ProductListing = (props:any) => {
  
  return (
    <ScrollView>
<View>
      <Datalink navigation={props.navigation}/>
      
      <TouchableOpacity 
      onPress={()=> props.navigation.navigate('ProdectDetails')}>
    <Text style ={style.product}>Go To Prodect Details</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
  )
}


const style = StyleSheet.create({
  product:{fontSize:20,color:'#fcfcfc', padding:20,margin:10,borderRadius:10,
  backgroundColor:'#c51efc',textAlign: 'center'
  }
})

export default ProductListing