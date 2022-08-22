import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import colors from 'styles/colors'

const TracksRecommendedItem = ({ data }: any) => {
  const {
    name,
    artists,
    album,
    duration_ms,
  } = data

  return (
    <View style={styles.container}>
      <Image
        style={styles.trackImage}
        source={{ uri: album.images[0].url }}
        resizeMode="stretch"
      />
      <View style={styles.informationContainer}>
        <Text style={styles.trackTitle} numberOfLines={1}>{name}</Text>
        <Text style={styles.artistsTitle}>{artists[0].name}</Text>
      </View>
    </View>
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
  },
  trackTitle: {
    fontFamily: 'Gotham-Bold',
    color: colors.BLUE,
    alignSelf: 'center',
    fontSize: 14,
    marginRight: 15,
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
})

export default TracksRecommendedItem