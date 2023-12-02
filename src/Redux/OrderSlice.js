import {createSlice} from "@reduxjs/toolkit";
import data from "../db.json";

const initialState = {
    orders : data.orders,
}

export const orderSlice = createSlice({
    name : 'order',
    initialState,
    reducers : {
        getOrders : (state) => {
            return state.orders
        },
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

export const {getOrders, approved, missing, missingUrgent} = orderSlice.actions;

export default orderSlice.reducer;