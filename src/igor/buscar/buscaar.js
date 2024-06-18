import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { useFonts , Anton_400Regular} from '@expo-google-fonts/anton';
import { Searchbar } from 'react-native-paper';
import Categorias from '../../categorias/categoriaas';


export default function Buscar() {
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

<Text style={styles.text}> Ingressos </Text>
<Text style={ [styles.text , { color: '#CECECF'}]}> ● </Text>
<Text style={ [styles.text , { color: '#CECECF'} ]}> Seus ingressos </Text>

</View>
<View style={styles.line} />

      <ScrollView>
           <Text style={styles.texto}>Categorias</Text>

           <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
             <Categorias img={require('../fotos/teatro.jpeg')}>
             TEATRO
             </Categorias>
                 
             <Categorias img={require('../fotos/dance.jpg')}>
             Ballet e Jazz
             </Categorias>   
       </View>
       <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
             <Categorias img={require('../fotos/degustacao.jpg')}>
             Festivais
             </Categorias>
                 
             <Categorias img={require('../fotos/breakdance.jpg')}>
             dança de rua
             </Categorias>   
       </View>

       <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
             <Categorias img={require('../fotos/orquestra.jpg')}>
             orquestras
             </Categorias>
                 
             <Categorias img={require('../fotos/palestra.jpg')}>
             Palestras
             </Categorias>   
       </View>



        </ScrollView>




















    </View>

    



  );
};


const styles = StyleSheet.create({
   container: {
       flex: 1,
       paddingVertical: "2%",
       alignItems: "center",
       justifyContent: "center",
       
   },
   view: {
     marginTop: StatusBar.ScrollView,
     marginEnd: StatusBar.ScrollView,
     
   },
   cabecalho:{
    flexDirection:"row",
    justifyContent:"space-beteen",
    paddingVertical: 5,
    backgroundColor: "#38A69D",
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
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
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



});

