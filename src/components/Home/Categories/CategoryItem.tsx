import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import colors from 'styles/colors'

const CategoryItem = ({ data }: any) => {
  const { name, icons } = data

  return (
    <View style={styles.container}>
      <Image
        style={styles.categoryImage}
        source={{ uri: icons[0].url }}
        resizeMode="stretch"
      />
      <Text style={styles.categoryTitle}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  categoryTitle: {
    fontFamily: 'Gotham-Bold',
    position: 'absolute',
    top: 70,
    color: colors.WHITE,
    alignSelf: 'center',
    fontSize: 14,
  },
  categoryImage: {
    width: 112,
    height: 112,
    borderRadius: 5,
  },
})

export default CategoryItem