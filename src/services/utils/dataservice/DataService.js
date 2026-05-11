import axios from 'axios';
import { getCurrentActionMetadata } from '../../../store/actionMetadataMiddleware';
import { isMultipartOrBinary, trimAllStringsDeep } from '../trimUtils';

axios.defaults.withCredentials = false;

const BASE_URL = import.meta.env.DEV
  ? import.meta.env.VITE_API_PROXY_URL || '/api'
  : import.meta.env.VITE_API_URL || '';

class DataService {
  static token = null;

  constructor() {
    this._baseUrl = BASE_URL;
  }

  static getToken(isPublic = false) {
    const tokenKey = isPublic ? 'access_token' : 'token';
    const storedToken = localStorage.getItem(tokenKey);

    if (storedToken) {
      DataService.token = storedToken;
      return storedToken;
    }

    return null;
  }

  get(relativeUrl, config = {}) {
    return axios.get(this._generateUrl(relativeUrl), this._config(config));
  }

  post(relativeUrl, data = null, config = {}) {
    return axios.post(this._generateUrl(relativeUrl), data, this._config(config));
  }

  put(relativeUrl, data = null, config = {}) {
    return axios.put(this._generateUrl(relativeUrl), data, this._config(config));
  }

  patch(relativeUrl, data = null, config = {}) {
    return axios.patch(this._generateUrl(relativeUrl), data ?? undefined, this._config(config));
  }

  delete(relativeUrl, data = null, config = {}) {
    const requestConfig = this._config(config);

    if (data) {
      requestConfig.data = data;
    }

    return axios.delete(this._generateUrl(relativeUrl), requestConfig);
  }

  setCommonHeader(key, value) {
    axios.defaults.headers.common[key] = value;
  }

  setBaseUrl(baseUrl) {
    this._baseUrl = baseUrl || '';
  }

  _generateUrl(relativeUrl = '') {
    if (relativeUrl.startsWith('http')) {
      return relativeUrl;
    }

    const baseUrl = this._baseUrl || '';
    const cleanRelativeUrl = relativeUrl.startsWith('/') ? relativeUrl.slice(1) : relativeUrl;

    return `${baseUrl}/${cleanRelativeUrl}`;
  }

  _config(config = {}) {
    const isFormData = config.isFormData || false;
    const isPublic = config.isPublic || false;
    const token = DataService.getToken(isPublic);
    const explicitWithCredentials = config.withCredentials;

    const baseHeaders = isFormData
      ? { ...(token && { Authorization: `Bearer ${token}` }) }
      : {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        };

    const finalConfig = {
      ...config,
      headers: {
        ...baseHeaders,
        ...config.headers,
      },
    };

    if (explicitWithCredentials !== undefined) {
      finalConfig.withCredentials = explicitWithCredentials;
    }

    return finalConfig;
  }
}

axios.interceptors.request.use((config) => {
  if (config.data && !isMultipartOrBinary(config)) {
    config.data = trimAllStringsDeep(config.data);
  }

  config._dataServiceProcessed = true;

  if (config.withCredentials === undefined) {
    config.withCredentials = !config.isPublic;
  }

  const actionMetadata = getCurrentActionMetadata();
  if (actionMetadata) {
    config._actionMetadata = { ...actionMetadata };
  }

  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401 && window.__handle401) {
      window.__handle401(error);
    }

    if (error?.response?.status === 403 && window.__handle403) {
      window.__handle403(error);
    }

    return Promise.reject(error);
  },
);

export default DataService;
