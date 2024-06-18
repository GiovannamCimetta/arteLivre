import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './home/homee'
import Profile from './profile/profilee'
import Favorites from './favorito/favoritoo'
import Search from './buscar/buscaar'

import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

function Routes2() {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#dfd880',
                tabBarInactiveTintColor: '#fff',
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: '#38A69D',
                    borderTopWidth: 0,
                }
            }}
        >
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="home" size={size} color={color}/>
                    }

                    return <Ionicons name="home-outline" size={size} color={color}/>
                }
            }}
            />

            <Tab.Screen
            name="Buscar"
            component={Search}
            options={{ headerShown: false,
            
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="search" size={size} color={color}/>
                    }
                    
                    return <Ionicons name="search-outline" size={size} color={color}/>
                }
            }}
            />

            <Tab.Screen
            name="Favorito"
            component={Favorites}
            options={{ headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="bookmark" size={size} color={color}/>
                    }

                    return <Ionicons name="bookmark-outline" size={size} color={color}/>
                }
            }}
            />

            <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="person" size={size} color={color}/>
                    }

                    return <Ionicons name="person-outline" size={size} color={color}/>
                }
            }}
            />
        </Tab.Navigator>
    )
}

export default Routes2;