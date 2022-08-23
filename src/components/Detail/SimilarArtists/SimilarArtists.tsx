import React, { useCallback } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import colors from 'styles/colors'
import { useRoute } from '@react-navigation/native'
import SimilarArtistsItem from './SimilarArtistsItem'
import useArtistsRelatedArtists from 'hooks/useArtistsRelatedArtists'

const SimilarArtists = () => {
  const route: any = useRoute()
  const { artists, loading } = useArtistsRelatedArtists(route.params.detail.album.artists[0].id)

  const keyExtractor = useCallback(({ id }: any) => id.toString(), [])

  const renderItem = useCallback(({ item }: any) => (
    <SimilarArtistsItem data={item} />
  ), [])

  return (
    <View>
      <Text style={styles.title}>Artistas Similares</Text>
      <FlatList
        keyExtractor={keyExtractor}
        data={artists}
        bounces={false}
        horizontal
        showsHorizontalScrollIndicator={false}
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
})

export default SimilarArtists