import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SpotifyNavigator from './SpotifyNavigator'


const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Spotify"
        component={SpotifyNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
