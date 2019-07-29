// 将登录请求返回的token进行本地存储
const USER_KEY = 'user'
// 获取token
export const getuser = () => JSON.parse(window.localStorage.getItem(USER_KEY))
// 设置token
export const setuser = (data) => JSON.parse(window.localStorage.setItem(USER_KEY, JSON.stringify(data)))
// 删除token
export const removeuser = () => JSON.parse(window.localStorage.removeItrm(USER_KEY))
