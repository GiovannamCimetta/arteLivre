import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View,  TextInput, TouchableOpacity, StatusBar, ScrollView} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import firebase from '../firebase';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';


export default function Login() {
const navigation = useNavigation();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errorLogin, setErrorLogin] = useState("");

const loginFirebase = ()=>{


  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    let user = userCredential.user;
    console.log( user )
    //  navigation.navigate("Home", { idUser: user.uid})
    // ...
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
  });



  }
  
  useEffect (()=>{


  }, []);

  return (
    
      <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Bem-Vindo(a)</Text>
        </Animatable.View>

        <View style={styles.containerLogo}>
       <Animatable.Image   
       animation="flipInY"
       source={require('../../assets/logo.png')}
       style={{ width: '100%' }}
       resizeMode="contain"
       
       
       
       />
                
                
             
              



       </View>

       

       
        

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <ScrollView>
            <Text style={styles.title}>Email</Text>
            <TextInput
                 style={styles.input}
                 placeholder="digite seu email"
                 type="text"
                 autoCorrect={false}
                 onChangeText={( text ) => setEmail (text) }
                 value={email} 
              />         

            <Text style={styles.title}>Senha</Text>
            <TextInput 
                style={styles.input}
                secureTextEntry={true}
                placeholder="Digite seu password"
                type="text"
                autoCorrect={false}
                onChangeText={( text ) => setPassword(text)}
                value={password}                                                               
            />

                { errorLogin === true
                 ?
                <View style={styles.contentAlert}>
                   <Ionicons
                    name="warning"
                    size={35}
                    color="#bdbdbd"
                  />
                  <Text style={styles.warningAlert}>invalid email or password</Text>
                    
                </View>
                 :
                <View/>
               }


               { email === "" || password === ""
               ?
                 <TouchableOpacity
                  disabled={true}
                  style={styles.buttonacesso}
                  onPress={loginFirebase}
                  >
                 
                    <Text style={styles.buttomnText}>Login</Text>

                 </TouchableOpacity>

                :

               <TouchableOpacity

                 style={styles.buttonacesso}
                 >
                
               </TouchableOpacity>
               

              }


        <TouchableOpacity style={styles.buttonRegister}
        onPress={ () => navigation.navigate('cadastro')}
        >
          <Text style={styles.registerText}>Cadastre-se</Text>
        </TouchableOpacity>
        </ScrollView>
        
        </Animatable.View>
        
      </View>
      
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#38A69D',
    width: '100%',
    
  },
  containerLogo:{
    flex:1,
    backgroundColor:'#38A69D',
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%',
    
    
 
 },



   containerHeader:{
    

   marginTop: '10%',
   marginBottom: '8%',
   paddingStart: '9%'
   },
   message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF'

   },
   containerForm:{
    
    backgroundColor: '#FFF',
    flex:1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 25,
    borderTopRightRadius: 60,
    paddingStart: '5%',
    paddingEnd: '5%',
    marginTop: StatusBar.ScrollView,
    marginEnd: StatusBar.ScrollView,
    width: '100%',
    
    
    
    
   },
   title:{
    fontSize: 20,
    marginTop: 28,
    
   },
   input:{
    borderBottomWidth: 1,
    heigth: 40,
    marginBottom: 12,
    fontSize: 16
   },
   buttonacesso:{
     backgroundColor:'#dfd880',
     width:'100%',
     borderRadius: 4,
     paddingVertical: 8,
     marginTop: 6,
     justifyContent: 'center',
     alignItems: 'center'


   },
   buttomnText:{
    color: '#FFF',
    fontSize: 19,
    fontWeight: 'bold'
  },
    registerText:{

    marginTop: 15,
    aligSelf: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    


    },
    view: {
      marginTop: StatusBar.ScrollView,
      marginEnd: StatusBar.ScrollView,
      
    },

   
   buttonRegister:{
    aligSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: StatusBar.ScrollView,
      marginEnd: StatusBar.ScrollView
   },


  contentAlert:{
    marginTop:20,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"

  },
  warningAlert:{
  paddingLeft: 10,
  color:"bdbdbd",
  fontSize: 16,

  },
  buttonLogin:{}


})
      