import SearchBar from 'components/UI/SearchBar'
import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import colors from 'styles/colors'

const StatusBarPlaceHolder = () => {
  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.BLUE}
      />
    </View>
  )
}

const HomeHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBarPlaceHolder />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>¡Encuentra tu Música Favorita!</Text>
        <SearchBar />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Gotham-Bold',
    color: colors.WHITE,
    width: '80%',
  },
  mainContainer: {
    justifyContent: 'space-between',
    backgroundColor: colors.BLUE,
    height: 180,
    borderBottomStartRadius: 27,
    borderBottomEndRadius: 27,
    padding: 28,
  },
})

export default HomeHeader
