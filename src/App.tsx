import React, {useEffect} from 'react';
import {
  FormScreen,
  MapScreen,
  SelectActionScreen,
  PrintFormScreen,
  TryLibScreen,
} from './components/screens';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Camera} from 'react-native-vision-camera';
import QrCodeScreen from './components/screens/QrCodeScreen';
import Geolocation from '@react-native-community/geolocation';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Platform} from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    requestionPermission();
  }, []);

  async function requestionPermission() {
    if (Platform.OS !== 'web') {
      // await Camera.requestCameraPermission();
      await Geolocation.requestAuthorization();
    }
  }

  return (
    <NavigationContainer>
      <BottomSheetModalProvider>
        <Stack.Navigator
          initialRouteName="Try"
          defaultScreenOptions={{
            headerShown: false,
          }}
          screenOptions={{gestureEnabled: false}}>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={SelectActionScreen}
          />
          <Stack.Screen
            options={{
              headerShown: true,
            }}
            name="Maps"
            component={MapScreen}
          />
          <Stack.Screen
            options={{
              headerShown: true,
            }}
            name="Form"
            component={FormScreen}
          />
          <Stack.Screen
            options={{
              headerShown: true,
            }}
            name="PrintForm"
            component={PrintFormScreen}
          />
          <Stack.Screen
            options={{
              headerShown: true,
            }}
            name="Scan"
            component={QrCodeScreen}
          />
          <Stack.Screen
            options={{
              title: 'Librairie',
              headerStyle: {
                backgroundColor: '#136397',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name="Try"
            component={TryLibScreen}
          />
        </Stack.Navigator>
        <Toast />
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
}
