import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import React, {BaseSyntheticEvent} from 'react';
import {Controller, FieldValues, useForm} from 'react-hook-form';
import { ScrollView } from 'react-native-gesture-handler';

const Profile = (porps: any) => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm();
  function onSubmit(
    data: FieldValues,
    event?: BaseSyntheticEvent<object, any, any> | undefined,
  ): unknown {
    throw new Error('Function not implemented.');
  }

  return (
    <ScrollView>
      <Text style={{fontSize:30,color:'black',justifyContent:'center',alignContent:'center',marginTop:50,marginLeft:120,fontWeight:'bold'}}> Welcome</Text>
      <Image
        style={{
          height: 250,
          width: 250,
          marginRight: 75,
          marginLeft: 75
          // marginTop: 10
          
        }}
        source={{
          uri: 'https://cdn.idropnews.com/wp-content/uploads/2020/02/27123259/Apple-Logo-WWDC.jpeg',
        }}
      />

      <View style={{}}>
      <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{borderWidth: 0.2, margin: 10}}>
              <TextInput
                placeholder="User Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="username"
        />
        {errors.username && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={{borderWidth: 0.2, margin: 10}}>
              <TextInput
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            margin: 10,
            backgroundColor: '#02d914',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;
