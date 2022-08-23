
import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import colors from 'styles/colors'
import Pause from 'assets/icons/Detail/Pause'
import { useRoute } from '@react-navigation/native'
import SoundWaves from 'assets/icons/Detail/SoundWaves'

const SelectedTrack = () => {
  const route: any = useRoute()
  const { name, album } = route.params.detail

  return (
    <View style={styles.container}>
      <Image
        style={styles.trackImage}
        source={{ uri: album.images[0].url }}
        resizeMode="stretch"
      />
      <View style={styles.informationContainer}>
        <Text style={styles.trackTitle} numberOfLines={1}>{name}</Text>
        <Text style={styles.date}>{album.release_date}</Text>
      </View>
      <Pause />
      <SoundWaves />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
  },
  informationContainer: {
    marginHorizontal: 13,
    justifyContent: 'center',
    width: '50%',
  },
  trackTitle: {
    fontFamily: 'Gotham-Bold',
    color: colors.BLUE,
    fontSize: 16,
  },
  trackImage: {
    width: 80,
    height: 80,
    borderRadius: 3,
  },
  date: {
    fontSize: 14,
    color: colors.GRAY,
    fontFamily: 'Gotham-Light',
  },
})

export default SelectedTrack