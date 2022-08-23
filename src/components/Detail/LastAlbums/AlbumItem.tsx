import React from 'react'
import { Image, StyleSheet } from 'react-native'

const AlbumItem = ({ data }: any) => {
  const { images } = data

  return (
    <Image
      style={styles.albumImage}
      source={{ uri: images[0].url }}
      resizeMode="stretch"
    />
  )
}

const styles = StyleSheet.create({
  albumImage: {
    width: '45%',
    height: 150,
    borderRadius: 3,
    marginBottom: 10,
    marginRight: '2.5%'
  },
})
export default AlbumItem