import axios from "axios";
class API {
  constructor(endpoint, token) {
    this.endpoint = endpoint;
    this.token = token;
  }

  async get(url) {
    let endpointURL = this.endpoint + url;
    console.log("end point is " + endpointURL);
    const config = {
      headers: {
        Authorization: "Bearer " + this.token,
      },
    };

    return axios
      .get(endpointURL, config)
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        return Promise.reject({
          status: err.response.status,
          message: err.response.statusText,
        });
      });
  }
}

module.exports = API;
