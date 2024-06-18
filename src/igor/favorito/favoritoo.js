import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput,  Dimensions, StatusBar, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { useFonts , Anton_400Regular} from '@expo-google-fonts/anton';
import { Searchbar } from 'react-native-paper';
import Categorias from '../../categorias/categoriaas';

const {width} = Dimensions.get('window');

export default function App() {
   useFonts({
      Anton_400Regular,
    });







  return (

      <View>
      
    
      <SafeAreaView style={styles.view}>
        <View style={styles.cabecalho}>
          <Ionicons
            name="chevron-back"
            size={35}
            color="#dfd880"
            onPress={() => { } } />
          <TextInput
            style={styles.input}
            placeholder="Pesquisar"
            autoCapitalize="none"
            autoCorrect={false}
            />
          <Ionicons
            name="search"
            size={35}
            color="#dfd880"
            onPress={() => { } } />
        </View>
      </SafeAreaView>

 <View style={styles.textContainer}>

           <Text style={styles.text}> Seus ingressos </Text>
           <Text style={ [styles.text , { color: '#CECECF'}]}> ● </Text>
           <Text style={ [styles.text , { color: '#CECECF'} ]}> Ingressos </Text>

 </View>

 <View style={styles.line} />

  <ScrollView>
    
    

        <View style={styles.containerr}>
          
          <View style={{ margin: 10 }}>

          <View style={styles.card}>
              <Image
                source={require('../fotos/1.jpeg')}
                style={{ width: 155, height: 100, borderRadius: 5, marginRight: 15, }} />

              <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                 <Text style={{ color: '#2F4F4F', fontSize: 23, fontWeight: 'bold', }}> Garra em Cena </Text>
                   <Text>24 julho de 2022 - 19h30</Text>
                   <Text>Teatro Leão de Formosa</Text>
                   <Text>1 Ingresso</Text>
              </View>
            </View>

          </View>
            

        </View>

        <View style={styles.containerr}>
          
          <View style={{ margin: 10 }}>

          <View style={styles.card}>
              <Image
                source={require('../fotos/2.jpg')}
                style={{ width: 155, height: 100, borderRadius: 5, marginRight: 15, }} />

              <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                 <Text style={{ color: '#2F4F4F', fontSize: 23, fontWeight: 'bold', }}> K-Pop Station </Text>
                   <Text>2 novembro de 2022 - 18h</Text>
                   <Text>Teatro Leão de Formosa</Text>
                   <Text>1 Ingresso</Text>
              </View>
            </View>

          </View>
            

        </View>





  </ScrollView>


     

   </View>
  );
};




 const styles = StyleSheet.create({
  background:{
    flex:1 ,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },

  card:{
    width: width - 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  barrasup: {
    
    backgroundColor: '#672B65',
    alignItems: 'center',
    justifyContent: 'center',
  },

  view: {
   marginTop: StatusBar.ScrollView,
   marginEnd: StatusBar.ScrollView,
   
 },
input:{
    flex: 1,
    backgroundColor:"white",
    borderRadius: 25,
    fontSize: 20,
    paddingHorizontal: 20,
   },
containerPage: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    },

textContainer: {
      flexDirection: 'row',
      marginVertical: '5%',
      marginHorizontal: '7%'
    
    },

text:{
      fontFamily: 'Anton_400Regular',
      fontSize: 22,
      marginHorizontal: '1%'
      
    
    },

line: {
      borderBottomColor: '#D8d8d8',
      borderBottomWidth: 2,
      
      
      },    
texto:{
         fontFamily: 'Anton_400Regular',
         fontSize: 18,
         marginHorizontal: '4%',
         paddingVertical: "4%",
       },
cabecalho:{
         flexDirection:"row",
         justifyContent:"space-beteen",
         paddingVertical: 5,
         backgroundColor: "#38A69D",
        },
  
})
