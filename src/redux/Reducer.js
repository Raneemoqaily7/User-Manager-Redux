import { FAIL_REQUEST, GET_USER_LIST , MAKE_REQUEST ,DELETE_USER,DESELECT_ITEM,SELECTED_ITEMS,HIDE_USER_MODAL,SHOW_USER_MODAL} from "./ActionType"

const initialstate = {
    loading: true,
    userlist: [],
    userObj: {},
    errMessage: "",
    selectedIds: [],
    isModalVisible:false



}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errMessage: action.payload


            }

        case GET_USER_LIST :
            return {
                ...state,
                loading: false,
                userlist: action.payload,
                userObj: {}



            }

       
            

            case SELECTED_ITEMS:
                return {
                    ...state,
                    selectedIds: [...state.selectedIds, action.payload]
                }

                case DESELECT_ITEM:
            return {
                ...state,
                selectedIds: state.selectedIds.filter(id => id !== action.payload)
            };

            case DELETE_USER :
            
            return {
                loading:false,
                ...state,
               
            };

            case SHOW_USER_MODAL:
                return{
                    ...state,
                    isModalVisible:true


                }

            case HIDE_USER_MODAL:
                return{
                    ...state,
                    isModalVisible:false
                }


           
        default: return state
    }

}