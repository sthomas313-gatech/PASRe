import React, {useContext} from 'react';
import { 
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'; 
//import {  } from '@react-navigation';

import { FIREBASE_APIKEY,
  FIREBASE_AUTHDOMAIN,
  FIREBASE_PROJECTID,
  FIREBASE_STORAGEBUCKET,
  FIREBASE_MESSAGINGSENDERID,
  FIREBASE_APPID} from 'react-native-dotenv'
  import firebase from '@react-native-firebase/app'
  import '@react-native-firebase/auth'


// custom components
import LoginScreen from './components/LoginScreen';
import FeedScreen from './components/FeedScreen';
//import Header2 from './components/Header2';
import DiscoverScreen from './components/DiscoverScreen';
import ProfileScreen from './components/ProfileScreen';
import RegisterScreen from './components/RegisterScreen';
import LoadingScreen from './components/LoadingScreen';

import { firebaseConfig } from './firebaseConfig';


firebase.initializeApp(firebaseConfig);

// navigation manager -- https://reactnative.dev/docs/navigation
const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();



const authStack = () => (
  <NavigationContainer>
    <AuthStack.Navigator initialRouteName = "Login">
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  </NavigationContainer>
)

const allStacks = () => (
    <NavigationContainer>

      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'rgb(239, 187, 125)',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        initialRouteName = "FeedScreen"
        >
        <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            // options={{ title: 'Login' }}
            // options={{ headerTitle: (props) => <Header2 {...props} /> }}
          />
        <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
        />
        <Stack.Screen 
            name="FeedScreen"
            component={FeedScreen}
            // options={{ title: "Recommendation Feed"}}
            // options={{ headerTitle: (props) => <Header2 {...props} /> }}
          />
        <Stack.Screen 
            name="DiscoverScreen"
            component={DiscoverScreen}
            // options={{ title: "Recommendation Feed"}}
            // options={{ headerTitle: (props) => <Header2 {...props} /> }}
          />
        <Stack.Screen 
            name="ProfileScreen"
            component={ProfileScreen}
            // options={{ title: "Recommendation Feed"}}
            // options={{ headerTitle: (props) => <Header2 {...props} /> }}
          />   
      </Stack.Navigator>
    </NavigationContainer>
    
  )

  export default createAppContainer(
    createSwitchNavigator(
      {
        Loading: LoadingScreen,
        App: allStacks,
        Auth: authStack,
      },
      {
        initialRouteName: "Loading"
      }
    )
  )
// export default function App() {

//   return (
//     <NavigationContainer>
//       <Stack.Navigator 
//         screenOptions={{
//           headerShown: false,
//           headerStyle: {
//             backgroundColor: 'rgb(239, 187, 125)',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//         >
//         <Stack.Screen
//             name="LoginScreen"
//             component={LoginScreen}
//             // options={{ title: 'Login' }}
//             // options={{ headerTitle: (props) => <Header2 {...props} /> }}
//           />
//         <Stack.Screen
//             name="RegisterScreen"
//             component={RegisterScreen}
//         />
//         <Stack.Screen 
//             name="FeedScreen"
//             component={FeedScreen}
//             // options={{ title: "Recommendation Feed"}}
//             // options={{ headerTitle: (props) => <Header2 {...props} /> }}
//           />
//         <Stack.Screen 
//             name="DiscoverScreen"
//             component={DiscoverScreen}
//             // options={{ title: "Recommendation Feed"}}
//             // options={{ headerTitle: (props) => <Header2 {...props} /> }}
//           />
//         <Stack.Screen 
//             name="ProfileScreen"
//             component={ProfileScreen}
//             // options={{ title: "Recommendation Feed"}}
//             // options={{ headerTitle: (props) => <Header2 {...props} /> }}
//           />   
//       </Stack.Navigator>
//     </NavigationContainer>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   navContainer: {
//     margin: 0,
//     padding: 0
//   }
// });
