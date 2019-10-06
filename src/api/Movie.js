import API from "./API";
import { each } from "./../jot";

class Movie {
  constructor() {
    this.API = new API()
  }

  getPopular(page = 1) {
    const resource = 'movie/popular';
    // let query = `page=${page}`

    return new Promise((resolve, reject) => {
      this.API.get(resource).then((data) => {
        let objMovie = {}
        each(data.results, (row, i) => {
          objMovie[row.id] = row
        })
        resolve(objMovie)
      })
      .catch(reject)
    })
  }
}

export default Movie