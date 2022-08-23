import React, { useCallback } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import colors from 'styles/colors'
import useTopTracks from 'hooks/useTopTracks'
import TopTracksItem from './TopTracksItem'
import RowSkeleton from 'components/Skeletons/RowSkeleton'

const TopTracks = () => {
  const { tracks, loading } = useTopTracks()

  const keyExtractor = useCallback(({ track }: any) => track.id.toString(), [])

  const renderItem = useCallback(({ item }: any) => (
    <TopTracksItem data={item.track} />
  ), [])

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lo Más Escuchado</Text>
        <RowSkeleton/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lo Más Escuchado</Text>
      <FlatList
        keyExtractor={keyExtractor}
        data={tracks}
        bounces={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontFamily: 'Gotham-Bold',
    color: colors.BLUE,
    marginBottom: 13,
  },
})

export default TopTracks