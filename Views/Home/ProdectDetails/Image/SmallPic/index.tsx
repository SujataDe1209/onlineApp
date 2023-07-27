import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

// const SmallPic = (props:any) => {
//   return (    
  
   
      
//         <View style={{ height:130, marginTop:20}}>
//           <ScrollView >
        
//             <View style={{height:130, width:130,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd'}}>
//               <View style={{flex:2}}>
//               <Image
//       source={props.imgSrc}
//       style={{flex:1 ,width:null ,height:null,resizeMode:'cover'}}
//     />

//               </View>
//               <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
//                 <Text>{props.picName}</Text>

//               </View>

//             </View>

            
//           </ScrollView>

//         </View>
    

// )
// }


// export default SmallPic

const SmallPic = () => {
  return (    
  
   
      
        <View style={{ height:130, marginTop:20}}>
          <ScrollView >
        
            <View style={{height:130, width:130,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd'}}>
              <View style={{flex:2}}>
              <Image
      source={{
        uri: 'https://images.deliveryhero.io/image/fd-my/Products/1452769526.jpg?width=%s'
      }}
      style={{flex:1 ,width:null ,height:null,resizeMode:'cover'}}
    />

{/* <Image
      source={require('../../../../../Images/79474.jpg')}
      style={{flex:1 ,width:null ,height:null,resizeMode:'cover'}}    //**pictur source from local folder
    /> */}

              </View>
              <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
                <Text>Butterfly Chicken Burger</Text>

              </View>

            </View>

            
          </ScrollView>

        </View>
    

)
}


export default SmallPic