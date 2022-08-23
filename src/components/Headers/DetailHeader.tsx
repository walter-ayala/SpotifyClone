import React from 'react'
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import colors from 'styles/colors'
import LeftArrow from 'assets/icons/Header/LeftArrow'
import { useNavigation, useRoute } from '@react-navigation/native'

const DetailHeader = () => {
  const { goBack } = useNavigation()
  const route: any = useRoute()


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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarPlaceHolder />
      <TouchableOpacity style={styles.arrowBack} onPress={goBack}>
        <LeftArrow />
      </TouchableOpacity>
      <Image
        style={styles.trackImage}
        source={{ uri: route?.params?.image?.url }}
        resizeMode="stretch"
      />
      <View style={styles.borderContainer} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },
  arrowBack: {
    width: 30,
    position: 'absolute',
    zIndex: 1,
    top: 45,
    left: 27,
    backgroundColor: colors.BLUE,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center'
  },
  trackImage: {
    width: '100%',
    height: 250,
  },
  borderContainer: {
    backgroundColor: colors.WHITE,
    height: 10,
    marginTop: -10,
    borderTopStartRadius: 27,
    borderTopEndRadius: 27,
  },
})

export default DetailHeader
