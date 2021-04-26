import {getAuthUserData} from "./authReducer";
import {BaseThunkType, InferActionsTypes} from "./reduxStore";

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch(action.type) {
        case "SN/APP/INITIALIZED_SUCCESS":
                return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }
}

const actions = {
    initializedSuccess: () => ({
        type: 'SN/APP/INITIALIZED_SUCCESS',
    })
}

export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData())

    Promise.all([ promise ])
        .then( () => {
        dispatch(actions.initializedSuccess())
    })
}

export default appReducer

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes, void>
