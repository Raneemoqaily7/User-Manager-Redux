import axios from "axios"
import { MAKE_REQUEST, FAIL_REQUEST, GET_USER_LIST ,DELETE_USER ,DESELECT_ITEM,SELECTED_ITEMS} from "./ActionType"

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST

    }
}



export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err.message
    }
}

export const getUserList = (data) => {
    return {
        type: GET_USER_LIST,
        payload: data
    }}

    export const selectItem = (id) => ({
        type: SELECTED_ITEMS,
        payload: id
    });

export const unSelectedItems=(id)=>{
    return{
        type:DESELECT_ITEM,
        payload:id
    }
}

export const deleteUser =(id)=>{
    return{
        type:DELETE_USER,
        payload:id
    }
}

export const fetchUserList=()=>{
    return(dispatch)=>{

        dispatch(makeRequest());
        axios.get("http://127.0.0.1:8000/api/user_list/").then(res=>{
            const users =res.data
            console.log(users)
            dispatch(getUserList(users))
        }).catch(err=>{
            dispatch(failRequest(err))
        })

        }
        
}

export const removeUser=(ids)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        let requestData = {
            data: {
              "users_id": ids}}

        axios.delete('http://127.0.0.1:8000/api/delete_user/',requestData).then(res=>{
        dispatch(deleteUser())}

        )
        .catch(err=>{ dispatch(failRequest(err))})
           
    
}}