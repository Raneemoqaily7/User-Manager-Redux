import { FAIL_REQUEST, GET_USER_LIST , MAKE_REQUEST ,DELETE_USER,DESELECT_ITEM,SELECTED_ITEMS} from "./ActionType"

const initialstate = {
    loading: true,
    userlist: [],
    userObj: {},
    errMessage: "",
    selectedIds: []


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
                loading:true,
                ...state,
                selectedIds: state.selectedIds.filter(id => !action.payload.includes(id))
            };
        default: return state
    }

}