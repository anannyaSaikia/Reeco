import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    orders : [],

}
export const orderSlice = createSlice({
    name : 'order',
    initialState,
    reducers : {
        approved : (state, action)=> {
            for(let order in state){
                if(order.id === action.payload) order.status = "approved"
            }
        },
        missing : (state, action) => {
            for(let order in state){
                if(order.id === action.payload) order.status = "missing"
            }
        },
        missingUrgent : (state, action) => {
            for(let order in state){
                if(order.id === action.payload) order.status = "missingUrgent"
            }
        }
    }
})

export const {approved, missing, missingUrgent} = orderSlice.actions;

export default orderSlice.reducer;