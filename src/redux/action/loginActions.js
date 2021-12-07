import axios from 'axios';
import * as actionTypes from './action'
const fetchReq = ()=>{
    return{
        type:actionTypes.FETCH_REQ
    }
}

const fetchSuc = ()=>{
    return{
        type:actionTypes.FETCH_SUC , 
        payload:users
    }
}

const fetchFail = (err) =>{
    return{
        type:actionTypes.fetchFail , 
        payload:err
    }
}

export const fetchUserss = () =>{
    return (dispatch)=>{
        try{
            
        }
        catch(err){

        }
    }
}