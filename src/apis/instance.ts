import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/',
});

export default instance;
