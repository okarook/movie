/**
 * each  Esta funcion se encarga de iterar objectos o arreglos
 * 
 * @param  {objecto | array}   data Datos a iterar
 * @param  {Function} fn   Funcion a invocar en cada iteracion
 */
export const each = (data, fn) => {
	if (Array.isArray(data)) {
		for (let i = 0, len = data.length; i < len; i++) {
			fn(data[i], i);
		}
	} else {
		for (let [key, value] of Object.entries(data)) {
			fn(value, key);
		}
	}
}