import axios from "axios"
import { MAKE_REQUEST, FAIL_REQUEST, GET_USER_LIST ,DELETE_USER ,DESELECT_ITEM,SELECTED_ITEMS 
    ,HIDE_USER_MODAL,SHOW_USER_MODAL ,ADD_USER ,EDIT_USER,SEARCH_USER} from "./ActionType"


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


export const showUserModal =()=>{
    return{
        type:SHOW_USER_MODAL
    }
}

export const hideUserModal=()=>{
    return{
        type:HIDE_USER_MODAL
    }
}

export const addUser=()=>{
    return{
        type:ADD_USER
    }
}

export const editUser=(data)=>{
    return{
        type:EDIT_USER,
        payload:data

    }
}

export const seachUser=(data)=>{
    return{
        type:SEARCH_USER,
        payload:data
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

// add_user/
export const addNewUser =(data)=>{
    return(dispatch)=>{
        dispatch(makeRequest())
        axios.post("http://127.0.0.1:8000/api/add_user/" ,data).then(res=>{
            dispatch(addUser())
        })
        .catch(err=>{dispatch(failRequest(err))})
       
    }
}


// update_user_status/<int:id>
export const updateUser =(data)=>{
    return(dispatch)=>{
        dispatch(makeRequest())
        console.log(data.id,"id")
            console.log(data,"data")
        axios.patch("http://127.0.0.1:8000/api/update_user_status/"+data.id ,data).then(res=>{
            
            dispatch(editUser(data))
        })
        .catch(err=>{dispatch(failRequest(err.message))})

    }
}

// user_list/<str:username>data
export const getUserDetail=(username)=>{
    return(dispatch)=>{
        dispatch(makeRequest())
        
    
        
        console.log(username,"data")
            
        axios.get("http://127.0.0.1:8000/api/user_list/"+username).then(res=>{
            console.log(res.data,"resssss")
            dispatch(seachUser(res.data))

        })
        .catch(err=>{dispatch(failRequest(err.message))})
    }
}