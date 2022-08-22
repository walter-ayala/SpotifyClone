import React from 'react'
import { StyleSheet, View } from 'react-native'
import TopTracks from 'components/Home/TopTracks/TopTracks'
import Categories from 'components/Home/Categories/Categories'
import TracksRecommended from 'components/Home/TracksRecommended/TracksRecommended'

const Home = () => {
  return (
    <View style={styles.container}>
      <Categories />
      <TopTracks/>
      <TracksRecommended/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 29,
    paddingTop: 14,
  },
})

export default Home