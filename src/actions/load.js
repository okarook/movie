/**
 * Apartado para cargar los parametros almacenados en el back-end o cache, 
 * para que la aplicacion funcione correctamente
 */

import * as actFavorite from "./movie/favorite";

const load = () => (dispatch, getState) => {
  
  // Cargar los favoritos
  dispatch(actFavorite.load())
};

export default load;