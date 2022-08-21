/* eslint-disable import/no-unresolved */
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Detail, Home } from 'screens'

const SpotifyNavigation = createNativeStackNavigator()

const SpotifyNavigator = () => (
  <SpotifyNavigation.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <SpotifyNavigation.Screen component={Home} name="Home" />
    <SpotifyNavigation.Screen component={Detail} name="Detail" />
  </SpotifyNavigation.Navigator>
)

export default SpotifyNavigator
