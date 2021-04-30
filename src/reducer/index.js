import {CLEAR_STATE, 
        LOAD_ITEM_DATA, 
        DELETE_ITEM,
        CHANGE_IS_RENTED,
        LOGIN} from "../action";

export const initialState = {
    username:'',
    userType:'',
    userId:0,
    itemData:{},
    isRented:false, //used to be false/true
    rentedId:0
}


const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case CLEAR_STATE:
            return {
                ...state,
                userType:null
            };

        case LOAD_ITEM_DATA:
            return{
                ...state,
                itemData:action.payload
            }

        case LOGIN:
            return{
                ...state,
                username: action.payload.username,
                userType: action.payload.role_name,
                userId: action.payload.user_id
            }

        case DELETE_ITEM:
            return{
                ...state,
                itemData:{}
            }

        case CHANGE_IS_RENTED:
            console.log("inside reducer: " + state.rentedId);
            return{
                ...state,
                isRented:!state.isRented,
                rentedId:action.payload
                // rented:[...state.rented, action.payload]
            }

        default:
            return{
                state
            }
    }
}

export default reducer;