import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import colors from 'styles/colors'

const TopTracksItem = ({ data }: any) => {
  const { navigate } = useNavigation()
  const { name, album, artists } = data

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={() => navigate("Detail", { detail: data, artist: artists[0], image: album.images[0] })}>
      <Image
        style={styles.trackImage}
        source={{ uri: album.images[0].url }}
        resizeMode="stretch"
      />
      <Text style={styles.trackTitle} numberOfLines={1}>{name}</Text>
      <Text style={styles.artistsTitle} numberOfLines={1}>{artists[0].name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    width: 112,
  },
  trackTitle: {
    fontFamily: 'Gotham-Bold',
    marginTop: 8,
    color: colors.BLUE,
    fontSize: 15,
  },
  trackImage: {
    width: 112,
    height: 112,
    borderRadius: 5,
  },
  artistsTitle: {
    fontSize: 14,
    color: colors.GRAY,
    fontFamily: 'Gotham-Light',
  },
})

export default TopTracksItem