import { ADDDATA, APPROVED, MISSING, MISSINGURGENT } from './actionTypes';

export const addData = (data) =>{
    return {
        type : ADDDATA,
        payload : data,
    }
}

export const orderApproved = (id) => {
    return {
        type : APPROVED,
        payload : id
    }
}

export const orderMissing = (id) => {
    return {
        type : MISSING,
        payload : id
    }
}

export const orderMissingUrgent = (id) => {
    return {
        type : MISSINGURGENT,
        payload : id
    }
}

export const fetchData = (dispatch) => {
    try {
        fetch('https://reecodata.onrender.com/orders')
            .then((res) => res.json())
            .then((res) => {
                dispatch(addData(res))
            })
    } catch (error) {
        console.log(error);
    }
}