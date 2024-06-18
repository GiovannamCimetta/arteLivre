import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, } from 'react-native';

export default function Categorias(props) {
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
         style={styles.categoriasImg}   
        />
      <Text style={styles.categoriaText}> 
          {filterDesc(props.children)} 
      </Text>
      <View opacity={0.4}>
         <Text style={styles.categoria}> {props.cost}  
         </Text>
      </View>
      



    </TouchableOpacity>

     

  );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        
      },
      header:{
        marginBottom: 8
      },
  
    categoriasImg: {
    marginHorizontal:'5%',
    width: 189,
    height: 90,
    borderRadius: 14
    },

    categoriaText: {
    marginHorizontal:'5%',
     fontSize: 16


    },










});