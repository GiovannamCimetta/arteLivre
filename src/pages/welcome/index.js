import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity
 } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation();

    return (
    <View style={styles.container}>
         
       <View style={styles.containerLogo}>
       <Animatable.Image   
       animation="flipInY"
       source={require('../../assets/logo.png')}
       style={{ width: '100%' }}
       resizeMode="contain"
       
       
       
       />
                
                
             
              



       </View>
             
            

       
        <Animatable.View delay={900} animation="fadeInUp"style={styles.containerForm}>
          
           <Text style={styles.title}>Pesquise, Compre e consuma ARTE! Em Patos de Minas. </Text>
           <Text style={styles.text}>Faça login para começar</Text>

          <TouchableOpacity 
          style={styles.buttom}
          onPress={ () => navigation.navigate('Login')}
          >

            <Text style={styles.buttomText}>Acessar</Text>

          </TouchableOpacity>


        </Animatable.View>

    </View>
    );
  
}

const styles = StyleSheet.create({
  container:{
     flex: 1,
     backgroundColor: '#38a69d',
  
},
   containerLogo:{
   flex:2,
   backgroundColor:'#38A69D',
   justifyContent: 'center', 
   alignItems: 'center'

},
   containerForm: {
     flex:1,
     backgroundColor: '#FFF',
     borderTopLeftRadius: 25,
     borderTopRightRadius: 25,
     paddingStart: '5%',
     paddingEnd: '5%'

},
    title:{
     fontSize: 24,
     fontWeight: 'bold',
     marginTop: 25,
     marginBottom: 15,

},
text:{
  color: '#a1a1a1'

},
buttom:{
  position: 'absolute',
  backgroundColor: '#dfd880',
  borderRadius: 50,
  paddingVertical: 10,
  width: '60%',
  alignSelf: 'center',
  bottom: '15%',
  alignItems: 'center',
  justifyContent: 'center'
},
   buttomText:{
   fontSize: 18,
   color: '#FFF',
   fontWeight: 'bold'

}

})