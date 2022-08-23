import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from 'styles/colors'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const SquareSkeleton = () => (
  <SkeletonPlaceholder>
    <View style={styles.containerCard}>
      <View style={styles.pictureSkeleton} />
    </View>
  </SkeletonPlaceholder>
)


const styles = StyleSheet.create({
  containerCard: {
    borderRadius: 12,
    shadowColor: colors.BLACK,
    shadowOpacity: 0.22,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2.22,
    marginRight: 20,
  },
  pictureSkeleton: {
    width: 112,
    height: 112,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: 'center',
  },
})

export default SquareSkeleton
