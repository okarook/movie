import * as env from "./../env";

class API{
  constructor() {
    this.uri = env.api_uri
    this.key = env.api_key
  }

  get(resource, query = "") {
    var uri = `${env.api_uri}${resource}?api_key=${this.key}&${query}`;
    
    return new Promise((resolve, reject) => {
      fetch(uri).then((response) => {
        response.json().then(function(json) {
          resolve(json)
        });
      })
      .catch(function(error) {
        reject(error.message)
      });
    })
  }

  post() {

  }
}

export default API