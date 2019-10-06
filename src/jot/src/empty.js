/**
 * isEmpty Comprueba si el valor pasado por parametro esta vacio
 *
 * Los siguientes valores devuelven:
 * 		- 0 				-> true
 * 		- "0" 			-> true
 * 		- "" 				-> true
 * 		- null 			-> true
 * 		- undefined -> true
 * 		- [] 				-> true
 * 		- {} 				-> true
 * 
 * @param  {mixed} data Dato verificar
 * @return {bool}      Devuelve verdadero si el dato esta vacio, 
 *                     de lo contrario false
 */
export const isEmpty = (data) => {
	if (! data || data === 0 || data === "0") {
		return true;
	} else if (typeof data === 'object' && Object.keys(data).length === 0) {
		return true;
	}
	return false;
};