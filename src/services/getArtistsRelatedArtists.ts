import instance from 'instances/instance'

const getArtistsRelatedArtists = async (id: string) => {
  try {
    const response = await instance.get(`/artists/${id}/related-artists`)
    return response.data.artists
  }
  catch (error:any) {
    return []
  }
}

export default getArtistsRelatedArtists