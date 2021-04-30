import {CLEAR_STATE, 
        LOAD_ITEM_DATA, 
        DELETE_ITEM,
        LOGIN} from "../action";

export const initialState = {
    username:'',
    userType:'',
    userId:0,
    itemData:{}
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
                username: action.payload.username,
                userType: action.payload.role_name,
                userId: action.payload.user_id
            }

        case DELETE_ITEM:
            return{
                ...state,
                itemData:{}
            }

        default:
            return{
                state
            }
    }
}

export default reducer;