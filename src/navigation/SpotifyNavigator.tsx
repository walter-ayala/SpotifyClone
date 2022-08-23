import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Detail, Home } from 'screens'
import Header from 'components/Headers'

const SpotifyNavigation = createNativeStackNavigator()

const SpotifyNavigator = () => (
  <SpotifyNavigation.Navigator initialRouteName="Home" screenOptions={{ header: () => <Header /> }}>
    <SpotifyNavigation.Screen component={Home} name="Home" />
    <SpotifyNavigation.Screen component={Detail} name="Detail" />
  </SpotifyNavigation.Navigator>
)

export default SpotifyNavigator
