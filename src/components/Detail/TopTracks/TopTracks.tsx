import React, { useCallback } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import colors from 'styles/colors'
import useArtistsTopTracks from 'hooks/useArtistsTopTracks'
import { useRoute } from '@react-navigation/native'
import TracksRecommendedItem from 'components/Home/TracksRecommended/TracksRecommendedItem'

const TopTracks = () => {
  const route: any = useRoute()
  const { tracks, loading } = useArtistsTopTracks(route.params.detail.album.artists[0].id)

  const keyExtractor = useCallback(({ id }: any) => id.toString(), [])

  const renderItem = useCallback(({ item }: any) => (
    <TracksRecommendedItem data={item} />
  ), [])

  return (
    <View>
      <Text style={styles.title}>Top Tracks</Text>
      <FlatList
        keyExtractor={keyExtractor}
        data={tracks}
        bounces={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={{marginBottom: 10,}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Gotham-Bold',
    color: colors.BLUE,
    marginBottom: 16,
    marginTop: 22,
  },
})

export default TopTracks