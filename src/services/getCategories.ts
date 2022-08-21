import instance from "instances/instance"

interface CategoriesResponse {
  items: any[],
  href: string,
  limit: number,
  next: string,
  offset: number,
  previous: string,
  total: number,
}

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