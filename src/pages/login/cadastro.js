import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={styles.background}>
     
     <View style={styles.texts}>
      <Text style={styles.text}>
        Crie sua conta
      </Text>

      <Text style={styles.subtext}>
        Faça seu cadastro de forma rápida e fácil 
      </Text>
     </View>

      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Nome"
        autoCorrect={false}
        anChangeText={()=>{}}
        />

        <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        anChangeText={()=>{}}
        />

        <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        anChangeText={()=>{}}
        />

        <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        autoCorrect={false}
        anChangeText={()=>{}}
        />

        <TouchableOpacity style={styles.btnSubmit}
        onPress={ () => navigation.navigate('Home')}>
          <Text style={styles.submitText}>Cadastre-se</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  containerlogo:{
    flex:1,
    justifyContent: 'center',
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
  input:{
    backgroundColor: '#D9D9D9',
    width: '90%',
    marginBottom:15,
    fontSize: 17,
    color: '#222',
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit:{
    backgroundColor: '#672B65',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText:{
    color: '#fff',
    fontSize: 18,
  },
  btnRegister:{
    marginTop: 10,
  },
  registerText:{
    color: '#377C2C'
  },
  text:{
    width: 180,
    fontSize: 47,
    color: '#672B65',
    marginTop: 60,
    lineHeight: 50,
    right: 70,
    fontWeight: 'bold',
    height: 100,
  },
  subtext:{
    width: 180,
    fontSize: 18,
    color: '#377C2C',
    marginTop: 1,
    lineHeight: 20,
    right: 70,
  },
  texts:{
    marginTop: 50,
    height: 180,
  }
})