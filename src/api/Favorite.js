import * as jot from "./../jot";

class Favorite {
  constructor() {
    this.entitie = "favorite"
  }

  add(movieId) {
    let data = {[movieId]: true}
    if (jot.cache.isSet(this.entitie)) {
      let dataCache = jot.cache.get(this.entitie)
      if(! jot.isEmpty(dataCache) && ! dataCache.hasOwnProperty(movieId)) {
        data = {...dataCache, [movieId]: true}
      } else {
        data = dataCache;
      }
    }

    jot.cache.set(this.entitie, data)
  }

  remove(movieId) {
    if (jot.cache.isSet(this.entitie)) {
      let dataCache = jot.cache.get(this.entitie)
      if(! jot.isEmpty(dataCache) && dataCache.hasOwnProperty(movieId)) {
        delete dataCache[movieId]
        jot.cache.set(this.entitie, dataCache)
      } 
    }
  }

  getAll() {
    let data = {}
    if (jot.cache.isSet(this.entitie)) {
      data = jot.cache.get(this.entitie)
    }
    return data
  }
}

export default Favorite