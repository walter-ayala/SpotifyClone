import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from 'styles/colors'

const SimilarArtistsItem = ({ data }: any) => {
  const { name, images } = data

  return (
    <View style={styles.container}>
      <Image
        style={styles.artistImage}
        source={{ uri: images[0]?.url }}
        resizeMode="stretch"
      />
      <Text style={styles.artistName} numberOfLines={2}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    width: 80,
  },
  artistName: {
    fontFamily: 'Gotham-Bold',
    color: colors.BLUE,
    alignSelf: 'center',
    fontSize: 12,
    textAlign: 'center',
  },
  artistImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
})

export default SimilarArtistsItem