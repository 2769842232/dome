// 导入request模块

import request from '../utils/request'

/**
 * 用户相关接口封装模块
 * 最佳实践：建议将所有请求都封装成一个一个的小函数，在需要的时候直接调用
 *   好处：1. 好维护，统一管理 2. 可重用
 * 遵循一个原则：不要直接在组件中发请求，最好都封装成函数进行调用
 */
// 封装登录模块请求的方法  直接导出
export const login = ({
  mobile,
  code
}) => {
  return request({
    method: 'POST',
    url: `http://ttapi.research.itcast.cn/app/v1_0/authorizations`,
    data: { mobile, code }
  })
}
