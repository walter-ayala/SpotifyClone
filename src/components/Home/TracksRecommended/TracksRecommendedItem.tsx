import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import colors from 'styles/colors'
import { useNavigation } from '@react-navigation/native'
import millisToMinutesAndSeconds from 'utils/millisToMinutes'


const TracksRecommendedItem = ({ data }: any) => {
  const { navigate } = useNavigation()
  const {
    name,
    artists,
    album,
    duration_ms,
  } = data

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={() => navigate("Detail", { detail: data, artist: artists[0], image: album.images[0] })}>
      <Image
        style={styles.trackImage}
        source={{ uri: album.images[0].url }}
        resizeMode="stretch"
      />
      <View style={styles.informationContainer}>
        <Text style={styles.trackTitle} numberOfLines={1}>{name}</Text>
        <Text style={styles.artistsTitle}>{artists[0].name}</Text>
      </View>
      <Text style={[styles.duration, styles.artistsTitle]}>{millisToMinutesAndSeconds(duration_ms)}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 13,
  },
  informationContainer: {
    marginHorizontal: 13,
    justifyContent: 'center',
    width: '60%',
  },
  trackTitle: {
    fontFamily: 'Gotham-Bold',
    color: colors.BLUE,
    fontSize: 14,
  },
  trackImage: {
    width: 44,
    height: 44,
    borderRadius: 3,
  },
  artistsTitle: {
    fontSize: 12,
    color: colors.GRAY,
    fontFamily: 'Gotham-Light',
  },
  duration: {
    alignSelf: 'center',
  },
})

export default TracksRecommendedItem