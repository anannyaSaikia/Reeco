import { ADDDATA, APPROVED, MISSING, MISSINGURGENT } from "./actionTypes";

const initState = {
    data: [],
    total : 0
}

export const orderReducer = (state = initState, action) => {
    switch (action.type) {

        case ADDDATA : {
            const sum = action.payload.reduce((acc, ele)=> {
                return acc+ele.total
            }, 0)
            return {...state, data: action.payload, total : sum}
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