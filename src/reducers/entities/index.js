import * as typeAction from './Schema';
import init from './init';

const _success = (state, action) => {
	const entitie = ((typeof state[action.entitie] !== "undefined")
		? {...state[action.entitie], ...action.data}
		: action.data
	);
	return {[action.entitie]: entitie};
};

const _set = (state, action) => {
	return {[action.entitie]: action.data};
};

const _delete = (state, action) => {
	// Obtener los id a eliminar, pueden ser uno o muchos
	const id = ((typeof action.data === "object") 
		? action.data.map((value) => (value.toString())) 
		: [action.data.toString()]
	);

	const entitie = ((typeof state[action.entitie] !== "undefined")
		? {...state[action.entitie]}
		: {}
	);
	
	// Obtener el nuevo estado con los elementos excluidos
	let entitieNew = {};
	for (let [key, value] of Object.entries(entitie)) {
		if (id.includes(key.toString()) === false) {
			entitieNew[key] = value;
		}
	}

	return {[action.entitie]: entitieNew};
};

const _truncate = (state, action) => ({
	[action.entitie]: {}
});

const entities = (state = init(), action) => {
	if (action.type.includes(typeAction.TYPE_SUCCESS)) {
		return {...state, ..._success(state, action)};
	} else if (action.type.includes(typeAction.TYPE_SET)) {
		return {...state, ..._set(state, action)};
	} else if (action.type.includes(typeAction.TYPE_DELETE)) {
		return {...state, ..._delete(state, action)};
	} else if (action.type.includes(typeAction.TYPE_TRUNCATE)) {
		return {...state, ..._truncate(state, action)};
	}

	return state;
};

export default entities;
