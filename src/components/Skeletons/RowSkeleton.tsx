import React, { useCallback } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import SquareSkeleton from './SquareSkeleton'

const RowSkeleton = () => {
  const tracks = Array.from(Array(8).keys())

  const keyExtractor = useCallback((item: any) => item.toString(), [])

  const renderItem = useCallback(() => (
    <SquareSkeleton />
  ), [])

  return (
    <FlatList
      contentContainerStyle={styles.contentContainerStyle}
      showsHorizontalScrollIndicator={false}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      data={tracks}
      horizontal
    />
  )
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignSelf: 'center',
  },
})

export default RowSkeleton
