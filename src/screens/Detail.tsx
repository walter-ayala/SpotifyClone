import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native'
import colors from 'styles/colors'
import TopTracks from 'components/Detail/TopTracks/TopTracks'
import SimilarArtists from 'components/Detail/SimilarArtists/SimilarArtists'
import SelectedTrack from 'components/Detail/SelectedTrack/SelectedTrack'
import LastAlbums from 'components/Detail/LastAlbums/LastAlbums'

const Detail = ({ route }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.artistTitle}>{route?.params?.artist?.name}</Text>
        <SelectedTrack />
        <LastAlbums/>
        <SimilarArtists />
        <TopTracks />
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
  artistTitle: {
    fontFamily: 'Gotham-Bold',
    color: colors.BLUE,
    fontSize: 24,
    marginVertical: 15,
  }
})

export default Detail