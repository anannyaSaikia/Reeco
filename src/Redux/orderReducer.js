import { ADDDATA, APPROVED, MISSING, MISSINGURGENT } from "./actionTypes";

const initState = {
    data: []
}

export const orderReducer = (state = initState, action) => {
    switch (action.type) {

        case ADDDATA : {
            return {...state, data: action.payload }
        }

        case APPROVED: {
            return {
                ...state, data: state.data.map((ele) =>
                    ele.id === action.payload
                        ? {...ele, status : 'approved'}
                        : ele
                )
            }
        }

        case MISSING: {
            return {
                ...state, data: state.data.map((ele) => 
                ele.id === action.payload
                    ? {...ele, status : 'missing'}
                    : ele
                )
            }
        }

        case MISSINGURGENT: {
            return {
                ...state, data: state.data.map((ele) =>
                    ele.id === action.payload
                        ? {...ele, status : 'missingUrgent'}
                        : ele
                )
            }
        }

        default: {
            return state
        }
    }
}