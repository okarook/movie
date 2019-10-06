import { isEmpty } from './../empty';

/**
 * Clase que provee metodos para manipular la cache del navegador
 */
class CCache {
	constructor() {
		// Inicializar el localStorage 
		this.storage = localStorage;
	}

	/**
	 * set Adiciona datos a la cache del navegador
	 * 
	 * @param {string} key    Identificador para el valor
	 * @param {mixed} value   Valor a guardar
	 * @param {number} expires Tiempo de expiracion
	 */
	set(key, value, expires = 24) {
		const _obj = JSON.stringify({exp: expires, data: value});
		this.storage.setItem(key, _obj);
	}

	/**
	 * get Obtiene datos de la cache del navegador
	 * 
	 * @param {string} key    Identificador para obtener el valor
	 * @return {mixed} 				Devuelve los datos almacenados en la cache
	 */
	get(key) {
		if (this.isSet(key)) {
			const data = JSON.parse(this.storage.getItem(key));
			return data.data;	
		}
		return null;
	}

	/**
	 * isSet Verifica si ya existe la clave en la cache del navegador
	 * 
	 * @param {string} key    Identificador a verificar
	 * @return {bool} 				Devuelve verdadero si existe, de lo contrario falso
	 */
	isSet(key) {
		return this.storage.hasOwnProperty(key);
	}

	/**
	 * isEmpty Verifica si la clave contiene datos en la cache del navegador
	 * 
	 * @param {string} key    Identificador a verificar
	 * @return {bool} 				Devuelve verdadero si es vacio, o falso
	 */
	isEmpty(key) {
		return isEmpty(this.get(key));
	}

	/**
	 * remove Remueve la clave de la cache del navegador
	 * 
	 * @param {string} key    Identificador a remover
	 */
	remove(key) {
		this.storage.removeItem(key);
	}

	/**
	 * clear Limpia los datos de la cache del navegador
	 *
	 * Dejando solo los indices 
	 */
	clear() {
		this.storage.clear();
	}
}

const cache = new CCache();
export default cache;