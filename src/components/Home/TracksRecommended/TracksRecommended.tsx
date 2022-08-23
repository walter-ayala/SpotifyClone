import React, { useCallback } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import colors from 'styles/colors'
import useRecommendations from 'hooks/useRecommendations'
import TracksRecommendedItem from './TracksRecommendedItem'
import ListTrackSkeleton from 'components/Skeletons/ListTrackSkeleton'

const TracksRecommended = () => {
  const { tracks, loading } = useRecommendations()

  const keyExtractor = useCallback(({ id }: any) => id.toString(), [])

  const renderItem = useCallback(({ item }: any) => (
    <TracksRecommendedItem data={item} />
  ), [])

  if (loading) {
    return (
      <View>
        <Text style={styles.title}>Canciones Recomendadas</Text>
        <ListTrackSkeleton/>
      </View>
    )
  }

  return (
    <View>
      <Text style={styles.title}>Canciones Recomendadas</Text>
      <FlatList
        keyExtractor={keyExtractor}
        data={tracks}
        bounces={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
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

export default TracksRecommended