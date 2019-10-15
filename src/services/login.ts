import request from '@/utils/request';
// @ts-ignore
import { JSEncrypt } from 'jsencrypt';

// const baseUrl = 'http://panhonghang.varbee.com:3330/login'
const baseUrl = 'http://localhost:4000/login/';

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  // 先请求公钥，
  return request.get(`${baseUrl}publicKey`).then(publicKey => {
    // 设置公钥并加密
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    const { userName } = params;
    const password = encrypt.encrypt(params.password);
    // 发送私钥去解密
    return request
      .post(`${baseUrl}decryption`, {
        body: JSON.stringify({
          username: userName,
          password,
        }),
      })
      .then(value => {
        // 设置localstorage
        localStorage.setItem('token', value.token);
        return value;
      });
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
