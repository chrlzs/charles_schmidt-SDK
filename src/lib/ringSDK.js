require("dotenv").config();
import API from "../lib/API";
var endPoint = new API();

class ringSDK {
  /**
   *
   * @param {string} accessToken
   *
   */

  constructor(params) {
    //var key = process.env.API_KEY;
    var key =  params.accessToken;
    var serviceURL = process.env.END_POINT;
    this.endPoint = new API(serviceURL, key);
  }

  getAllMovies() {
    return this.endPoint.get("/movie");
  }

  getMovieById(params = {}) {
    if (!params) {
      return returnValidationMismatch("movie", "movie-id");
    }
    return this.endPoint.get("/movie/" + params);
  }

  getMovieQuotesById(params = {}) {
    if (!params) {
      return returnValidationMismatch("movie", "movie-id");
    }
    return this.endPoint.get("/movie/" + params + "/quote");
  }
}

function returnValidationMismatch(segment, param) {
  return Promise.reject({
    status: 0,
    message:
      "The segment: /" +
      segment +
      "/ or parameter '" +
      param +
      "' is incorrect",
  });
}

module.exports = ringSDK;
