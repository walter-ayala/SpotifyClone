import instance from 'instances/instance'

const getTopTracks = async () => {
  try {
    const response = await instance.get('playlists/1sAVKbeZfl9IjAST4MNnYb')
    return response.data.tracks.items
  }
  catch (error:any) {
    return []
  }
}

export default getTopTracks