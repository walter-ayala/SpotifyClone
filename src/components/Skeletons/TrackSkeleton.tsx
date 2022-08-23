import React from 'react'
import { StyleSheet, View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const TrackSkeleton = () => (
  <SkeletonPlaceholder>
      <View style={styles.container}>
        <View style={styles.pictureSkeleton} />
        <View style={styles.informationContainer}>
          <View style={styles.trackLine}/>
          <View style={styles.artistLine}/>
        </View>
        <View style={styles.duration}/>
      </View>
  </SkeletonPlaceholder>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 13,
    alignItems: 'center',
  },
  informationContainer: {
    marginHorizontal: 13,
    justifyContent: 'center',
    width: '60%',
  },
  pictureSkeleton: {
    width: 44,
    height: 44,
    borderRadius: 3,
  },
  artistLine: {
    marginVertical: 2,
    width: '40%',
    height: 20,
    borderRadius: 10,
  },
  trackLine: {
    marginVertical: 2,
    width: '60%',
    height: 20,
    borderRadius: 10,
  },
  duration: {
    alignSelf: 'center',
    width: 40,
    height: 20,
    borderRadius: 10,
  },
})

export default TrackSkeleton
