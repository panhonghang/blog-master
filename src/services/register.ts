import request from '@/utils/request';

const baseUrl = 'http://panhonghang.varbee.com:4000';

export async function query(): Promise<any> {
  return request('http://t.weather.sojson.com/api/weather/city/101030100');
}

export async function queryCurrent(): Promise<any> {
  return request('/api/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
