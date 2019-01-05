import { CHANGE_SEARCH_FIELD } from './constants.js'

const intitialState = {
	searchfield: ''
}

export const searchRobots = (state=intitialState,action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
		 return Object.assign({},state,{searchfield:action.payload})
        default: 
           return state;
	}
}