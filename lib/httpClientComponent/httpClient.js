import { create } from "apisauce";
import { AxiosRequestConfig } from "axios";

export default class HttpClient {
  /**
   * baseUrl = "https://apps.smartesnspaces.com/"
   * headers = {"content-type":"application/Json"}
   * timeout= 30000 ms
   * @param {*} baseUrl
   * @param {*} headers
   * @param {*} timeout
   */

  constructor(baseUrl, headers, timeout) {
    this.api = create({
      baseURL: baseUrl,
      headers: headers,
      timeout: timeout
    });
  }

  /**
   * Get api Example
   * url = "/shuttle/org/test"
   * params = {"username":"demoUser"}
   * config = {headers:{"content-type":"applications/Json"}}
   * @param {*} url
   * @param {*} params
   * @param AxiosRequestConfig config
   */
  getApi(url, params, config) {
    return this.api.get(url, params, config);
  }

  /**
   *
   * @param {*} url
   * @param {*} params
   * @param AxiosRequestConfig config
   */
  deleteApi(url, params, config) {
    return this.api.delete(url, params, config);
  }

  /**
   *
   * @param {*} url
   * @param {*} data
   * @param {*} config
   */
  postApi(url, data, config) {
    return this.api.post(url, data, config);
  }

  /**
   *
   * @param {*} url
   * @param {*} data
   */
  patchApi(url, data, config) {
    return this.api.patch(url, data, config);
  }

  /**
   *
   * @param {*} url
   * @param {*} data
   */
  putApi(url, data, config) {
    return this.api.put(url, data, config);
  }
}
