import React, { useCallback } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import colors from 'styles/colors'
import CategoryItem from './CategoryItem'
import useCategories from 'hooks/useCategories'

const Categories = () => {
  const { categories, loading } = useCategories()

  const keyExtractor = useCallback(({ id }: any) => id.toString(), [])

  const renderItem = useCallback(({ item }: any) => (
    <CategoryItem data={item} />
  ), [])

  return (
    <View>
      <Text style={styles.title}>Categorías</Text>
      <FlatList
        keyExtractor={keyExtractor}
        data={categories}
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
  },
})

export default Categories