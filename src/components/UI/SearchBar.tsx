import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import colors from 'styles/colors'
import SearchIcon from 'assets/icons/Header/SearchIcon'

const SearchBar = () => {
  const [searchBy, setSearchBy] = useState('')

  return (
    <View style={styles.row}>
      <View style={styles.search}>
        <View style={styles.containerIconButton}>
          <SearchIcon color={colors.GRAY} />
        </View>
        <TextInput
          onChangeText={setSearchBy}
          placeholder="Buscar"
          style={styles.inputPlace}
          clearButtonMode="while-editing"
          returnKeyType="search"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={false}
          value={searchBy}
          placeholderTextColor={colors.GRAY}
          allowFontScaling={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  search: {
    flex: 1,
    height: 42,
    backgroundColor: colors.WHITE,
    alignSelf: 'center',
    borderRadius: 27,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  inputPlace: {
    flex: 1,
    paddingRight: 15,
    fontFamily: 'Gotham-Light',
    color: colors.GRAY,
    fontSize: 18,
  },
  containerIconButton: {
    height: '100%',
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
})

export default SearchBar
