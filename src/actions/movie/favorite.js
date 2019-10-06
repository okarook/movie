import Schema from './../../reducers/entities/Schema';
import Favorite from "./../../api/Favorite";

// Instanciamos el objeto de los esquemas
const schemaFavorite = new Schema('favorite');

export const load = () => (dispatch, getState) => {
  let obj = new Favorite();
  let data = obj.getAll()
  dispatch(schemaFavorite._success(data))
};

export const add = (movieId) => (dispatch, getState) => {
  let data = {[movieId]: true}
  let obj = new Favorite();
  obj.add(movieId)
  
  dispatch(schemaFavorite._success(data))
};

export const remove = (movieId) => (dispatch, getState) => {
  let obj = new Favorite();
  obj.remove(movieId)
  
  dispatch(schemaFavorite._delete(movieId))
};


export const clear = () => (dispatch, getState) => {
  dispatch(schemaFavorite._truncate());
};
