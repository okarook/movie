export const TYPE_REQUEST = "REQUEST_ENTITIES"; 
export const TYPE_SUCCESS = "SUCCESS_ENTITIES"; 
export const TYPE_SET = "SET_ENTITIES"; 
export const TYPE_DELETE = "DELETE_ENTITIES"; 
export const TYPE_TRUNCATE = "TRUNCATE_ENTITIES";

class Schema {
	constructor(entitie = "NOT_ENTITIE") {
		this.obj = {
			type: null,
			entitie: entitie,
			data: null
		};

		this.entitie = entitie.toUpperCase() + "_"; 
	}

	_request() {
		return {
			...this.obj,
			type: (this.entitie + TYPE_REQUEST)
		}
	}

	_success(data) {
		return {	
		  ...this.obj,
			type: (this.entitie + TYPE_SUCCESS),
			data: data,
		  received_at: Date.now()
		}
	}

	_set(data) {
		return {	
		  ...this.obj,
			type: (this.entitie + TYPE_SET),
			data: data,
		  received_at: Date.now()
		}
	}

	_delete(data = []) {
		return {
			...this.obj,
			type: (this.entitie + TYPE_DELETE),
			data: data
		}
	}

	_truncate() {
		return {
			...this.obj,
			type: (this.entitie + TYPE_TRUNCATE)
		}
	}
}

export default Schema;