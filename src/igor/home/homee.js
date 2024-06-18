import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import {AppLoading} from 'expo';
import { MaterialIcons } from '@expo/vector-icons'
import { useFonts , Anton_400Regular} from '@expo-google-fonts/anton';

import Festivais from '../../Festivais/festivaais';




export default function Home() {

   useFonts({
    Anton_400Regular,
 });

 
 


  return (
    <View style={styles.container}>
       <View style={styles.header}>
         <Image
          source={require('../../assets/logo5.png')}
          resizeMode="contain"
          style={styles.image }
          
          
         />


         <View style={styles.textContainer}>

        <Text style={styles.text}> Ingressos </Text>
        <Text style={ [styles.text , { color: '#CECECF'}]}> ● </Text>
        <Text style={ [styles.text , { color: '#CECECF'} ]}> Seus ingressos </Text>

            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'} }>
              <MaterialIcons 
                 name="filter-list"
                 size={24}
                 color="#000"
                    />

            </TouchableOpacity>
        </View>
       </View>

        <View style={styles.line} />

        <ScrollView>
           <Text style={styles.texto}>Destaques de Eventos</Text>

           <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
             
                 <Festivais img={require('../fotos/1.jpg')} cost="R$25,00">
                    Festival de Ballet classico Lucia Queiroz

                 </Festivais>

                 <Festivais img={require('../fotos/3.jpg')} cost="R$35,00">
                    Festival de Teatro grupo Tupam

                 </Festivais>



           </View>
     
           <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
             
             <Festivais img={require('../fotos/2.jpg')} cost="R$15,00">
                Festival de Kpop 

             </Festivais>

             <Festivais img={require('../fotos/4.jpeg')} cost="R$55,00">
                Festival de Cervejas Artesanais

             </Festivais>



       </View>




        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: 430,
    height:125,
   backgroundColor: '#38A69D'
  },
  textContainer: {
  flexDirection: 'row',
  marginVertical: '5%',
  marginHorizontal: '5%'

},
 text:{
   fontFamily: 'Anton_400Regular',
   fontSize: 26,
   marginHorizontal: '1%'
   

 },
line: {
borderBottomColor: '#D8d8d8',
borderBottomWidth: 2,


},

texto:{
  fontFamily: 'Anton_400Regular',
  fontSize: 26,
  marginHorizontal: '3%',
  paddingVertical: "4%",
},







});