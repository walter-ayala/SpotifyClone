
import React, { useCallback } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import colors from 'styles/colors'
import AlbumItem from './AlbumItem'
import { useRoute } from '@react-navigation/native'
import useArtistsAlbums from 'hooks/useArtistsAlbums'

const LastAlbums = () => {
  const route: any = useRoute()

  const { albums, loading } = useArtistsAlbums(route.params.detail.album.artists[0].id)

  const keyExtractor = useCallback(({ id }: any) => id.toString(), [])

  const renderItem = useCallback(({ item }: any) => (
    <AlbumItem data={item} />
  ), [])

  return (
    <View>
      <Text style={styles.title}>Últimos Álbumes</Text>
      <FlatList
        keyExtractor={keyExtractor}
        numColumns={2}
        data={albums}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Gotham-Bold',
    color: colors.BLUE,
    marginBottom: 15,
    marginTop: 14,
  },
  contentContainerStyle: {
    width: '100%',
  },
})

export default LastAlbums