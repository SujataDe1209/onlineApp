import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import SmallPic from './SmallPic';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  pic: {
    height: 250,
    width: 250,
    marginRight:75,
    marginLeft: 75,
    marginTop: 10,
    borderRadius: 10,
  },

  Foodname: {
    marginLeft: 24,
    marginTop: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  foodType: {
    marginLeft: 20,
    marginRight: 260,
    fontSize: 15,
    color: 'black',
    backgroundColor: '#f7d5ea',
    borderRadius: 8,
    textAlign: 'center',
  },
  foodPrice: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',
  },
});

//  const DisplayAnImage = () => {
//    return (
//      <View >

//        <Image
//          style={styles.pic}
//          source={{
//            uri: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
//          }}
//        />

//        <Name/>

//      </View>
//    );
//  };

const DisplayAnImage = (props:any) => {
  console.log(props);
  const images = [
    {
      id: 1,
      title: 'name1',
      imageUrl:
        'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    },
    {
      id: 2,
      title: 'name2',
      imageUrl:
        'https://www.tastingtable.com/img/gallery/common-mistakes-everyone-makes-with-burgers/l-intro-1655906637.jpg',
    },

    {
      id: 3,
      title: 'name3',

      imageUrl:
        'https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=',
    },

    {
      id: 4,
      title: 'name4',

      imageUrl:
        'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80',
    },
  ];

  return (
    <View>
      <SafeAreaView />

      <FlatList
        data={images}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        renderItem={({item}) => (
          <View>
            <Image style={styles.pic} source={{uri: item.imageUrl}} />
            <TouchableOpacity disabled={true}></TouchableOpacity>
          </View>
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        {images.map((item, index) => {
          return (
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: 'gray',
                margin: 5,
              }}></View>
          );
        })}
      </View>
      <ProductName />
    </View>
  );
};

const ProductName = () => {
  return (
    <View>
      <Text style={styles.Foodname}>Burger Singh - Big Punjabi Burgers </Text>
      <Text style={styles.foodType}>Non veg</Text>
      <Text style={styles.foodPrice}>Price:150</Text>
      <ScrollView>
        <View style={{flex: 1, paddingTop: 20}}>
          <Text
            style={{
              fontSize: 19,
              color: 'black',
              fontWeight: '700',
              paddingHorizontal: 20,
            }}>
            Smililar from Popular Items
          </Text>
          <View style={{height: 130, marginTop: 20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            
              <SmallPic />



              {/* <SmallPic Image:true
        
          
        }}
        source={{
          uri: 'https://cdn.idropnews.com/wp-content/uploads/2020/02/27123259/Apple-Logo-WWDC.jpeg',
        }}
      
/> */}
              <SmallPic />
              <SmallPic />
              <SmallPic />
              <SmallPic />
              <SmallPic />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DisplayAnImage;
