import Movie from './../../api/Movie';
import Schema from './../../reducers/entities/Schema';

// Instanciamos el objeto de los esquemas
const schemaMovie = new Schema('movie');

export const getPopular = () => (dispatch, getState) => {
  const obj = new Movie();
  obj.getPopular()
    .then((data) => {
      dispatch(schemaMovie._success(data))
    })
    .catch((error) => dispatch(alert('Ocurrió un error!!')));
};

export const clear = () => (dispatch, getState) => {
  dispatch(schemaMovie._truncate());
};