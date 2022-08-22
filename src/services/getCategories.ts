import instance from 'instances/instance'

const getCategories = async () => {
  try {
    const response = await instance.get('/browse/categories')
    return response.data.categories.items
  }
  catch (error:any) {
    return []
  }
}

export default getCategories