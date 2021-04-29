import {LOAD_OWNER_DATA, 
        LOAD_RENTER_DATA, 
        LOAD_ITEM_DATA, 
        LOGIN} from "../action";

export const initialState = {
    renter:[],
    owner:[],
    itemData:[],
    username:"",
    password:"",
    userType:""
}

const reducer = (state= initialState, action) =>
{
    switch(action.type)
    {
        case LOAD_OWNER_DATA:
            return{
                ...state,
                owner:[...state.owner, action.payload]
            }

        case LOAD_RENTER_DATA:
            return{
                ...state,
                renter:[...state.renter, action.payload]
            }

        case LOAD_ITEM_DATA:
            return{
                ...state,
                itemData:[...state.itemData, action.payload]
            }

        case LOGIN:
            return{
                ...state,
                username:action.payload,
                password:action.payload,
                userType:action.payload,
            }

        default:
            return{
                state
            }
    }
}

export default reducer;