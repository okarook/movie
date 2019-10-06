import * as nameEntities from './nameEntities.json';
import { each } from './../../jot';

/**
 * init Obtiene el nombre de las entidades que hacen parte del <state>
 *  
 * @return {Object} Devuelve el nombre de las entidades
 */
const init = () => {
	let entities = {};
	each(Object.keys(nameEntities), (value) => {
		entities[value] = {};
	});
	return entities;
};

export default init;