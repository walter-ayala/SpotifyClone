import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import TopTracks from 'components/Home/TopTracks/TopTracks'
import Categories from 'components/Home/Categories/Categories'
import TracksRecommended from 'components/Home/TracksRecommended/TracksRecommended'
import colors from 'styles/colors'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Categories />
        <TopTracks />
        <TracksRecommended />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingLeft: 29,
  },
})

export default Home