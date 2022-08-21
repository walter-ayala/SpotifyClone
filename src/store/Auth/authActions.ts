export const AUTH_SUCCESS = 'AUTH_SUCCESS'


export const authSuccess = (userInfo: any) => ({
  type: AUTH_SUCCESS,
  payload: userInfo,
})

