import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, } from 'react-native';

export default function Festivais(props) {
  function filterDesc(desc){
    if(desc.length < 27){
       return desc;
    }
 
    return `${desc.substring(0, 23)}...`;
 
 
 }

  return (

    <TouchableOpacity style={styles.container}>
      <Image
        source={props.img}
         style={styles.eventoImg}   
        />
      <Text style={styles.eventoText}> 
          {filterDesc(props.children)} 
      </Text>
      <View opacity={0.4}>
         <Text style={styles.eventoText}> {props.cost}  
         </Text>
      </View>
      



    </TouchableOpacity>

     

  );


}

const styles = StyleSheet.create({
    container:{
      paddingVertical: '2%',
      alignItems:'center',
      justifyContent: 'center'
    },
    eventoImg: {
    width: 175,
    height: 175

    },

    eventoText: {
     fontSize: 16


    },










});