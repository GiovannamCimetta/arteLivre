import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
const {width} = Dimensions.get('window');

export default function App() {
  return (



<ScrollView>



    <KeyboardAvoidingView style={styles.background}>
     
    
     <View style={styles.containerr}>
      <StatusBar backgroundColor='#fff' />

      <View style={{margin:10}}>

        <View style={styles.card}>
          <Image
          source={require('../fotos/pv.png')}
          style={{ width: 100, height:100, borderRadius:60, marginRight: 15,}}
          />

          <View style={{flex:1, justifyContent: 'space-evenly'}}>
            <Text style={{color: '#000', fontSize: 23, fontWeight: 'bold',}}>Igor Martins Teixeira</Text>
            <Text>igor.943mt@gmail.com</Text>
          </View>
        </View>

      </View>

    </View>

      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="ex: Nome: Igor Martins Teixeira"
        autoCorrect={false}
        anChangeText={()=>{}}
        />

        <TextInput
        style={styles.input}
        placeholder="ex: Logradouro: Juiz de Fora N/46"
        autoCorrect={false}
        anChangeText={()=>{}}
        />

        <TextInput
        style={styles.input}
        placeholder="ex: Bairro: Centro"
        autoCorrect={false}
        anChangeText={()=>{}}
        />

        <TextInput
        style={styles.input}
        placeholder="ex: Cidade: Lagamar"
        autoCorrect={false}
        anChangeText={()=>{}}
        />    

        <TextInput
        style={styles.input}
        placeholder=" ex: Email: Igor.943mt@gmail.com"
        autoCorrect={false}
        anChangeText={()=>{}}
        />

        <TextInput
        style={styles.input}
        placeholder="ex: CPF: 000.000.000.-00"
        autoCorrect={false}
        anChangeText={()=>{}}
        />

        <TextInput
        style={styles.input}
        placeholder="ex: Telefone: (00) 00000-0000"
        autoCorrect={false}
        anChangeText={()=>{}}
        />

      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
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
    padding: 14,
  },
  containerr: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 7,
    paddingVertical: 50
  },
  card:{
    width: width - 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  view: {
    marginTop: StatusBar.ScrollView,
    marginEnd: StatusBar.ScrollView,
    
  },
})
