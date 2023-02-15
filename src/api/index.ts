import useRequest from '@/hooks/useRequest';

interface ApiType {
  '/couse/buy': {
    id: number;
  };
}

/**
 * 账号密码登录
 * @returns UseAxiosReturn
 */
export function loginPassword(data: PlainObject) {
  return useRequest(`/login/password`, { method: 'POST', data });
}

/**
 * 获取验证码
 * @returns UseAxiosReturn
 */
export function codeGet(data: PlainObject) {
  return useRequest(`/user/code/get`, { method: 'POST', data });
}

/**
 * 测试有参数类型检测的请求
 * @returns UseAxiosReturn
 */
export function test<T extends keyof ApiType>(obj: ApiType[T]) {
  return useRequest('/couse/buy', { method: 'POST', data: obj})
}
