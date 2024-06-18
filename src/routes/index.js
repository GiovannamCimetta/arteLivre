import {createNativeStackNavigator} from '@react-navigation/native-stack'


import Welcome  from '../pages/welcome'
import Login from '../pages/login' 
import Home from '../igor/routes2';
import Buscar from '../igor/buscar/buscaar';
import cadastro from '../pages/login/cadastro'
import favorito from '../igor/favorito/favoritoo'
import firebase from '../pages/firebase';


const Stack = createNativeStackNavigator();

export default function Routes (){
    return(

     <Stack.Navigator>
        <Stack.Screen
           name="welcome"
           component={Welcome}
           options={{ headerShown: false }}
         />

       <Stack.Screen

          name="Login"
          component={Login}
          options={{ headerShown: false }}

         />

       <Stack.Screen

          name="Home"
          component={Home}
          options={{ headerShown: false }}

         />
        <Stack.Screen

          name="Buscar"
          component={Buscar}
          options={{ headerShown: false }}
          
        />

        <Stack.Screen

          name="cadastro"
          component={cadastro}
          options={{ headerShown: false }}
          
        />
        
        <Stack.Screen

          name="favorito"
          component={favorito}
          options={{ headerShown: false }}
          
        />







      </Stack.Navigator>

      





)


}