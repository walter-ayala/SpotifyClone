import instance from 'instances/instance'

const getArtistsAlbums = async (id: string) => {
  try {
    const response = await instance.get(`/artists/${id}/albums?limit=4`)
    return response.data.items
  }
  catch (error:any) {
    return []
  }
}

export default getArtistsAlbums