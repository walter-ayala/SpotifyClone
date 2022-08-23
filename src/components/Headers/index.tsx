import React from 'react'
import { useRoute } from '@react-navigation/native'
import { View } from 'react-native'
import HomeHeader from './HomeHeader'
import DetailHeader from './DetailHeader'

const Header = () => {
  const { name } = useRoute()

  switch (name) {
    case 'Home':
      return <HomeHeader />
    case 'Detail':
      return <DetailHeader />
    default:
      return <View />
  }
}

export default Header
