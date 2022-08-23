import React, { useCallback } from 'react'
import { FlatList } from 'react-native'
import TrackSkeleton from './TrackSkeleton'

const ListTrackSkeleton = () => {
  const articlesCard = Array.from(Array(10).keys())

  const keyExtractor = useCallback((item: any) => item.toString(), [])

  const renderItem = useCallback(() => (
    <TrackSkeleton />
  ), [])

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      data={articlesCard}
    />
  )
}

export default ListTrackSkeleton
