export const initState = {
    subordinatesArr: [],
    addressee: "",
    messageReason: "",
    messageText:"",
}

export enum REDUCER_ACTION_TYPE {
    GET_SUBORDINATES,
    GET_ADDRESSEE,
    GET_MESSAGE_REASON,
    GET_MESSAGE_TEXT,
    
}


type ReducerAction = {
    type: REDUCER_ACTION_TYPE;
    payload?: any;
}

export const reducer = (state: typeof initState, action: ReducerAction) => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.GET_SUBORDINATES:
            return { ...state, subordinatesArr: action.payload ?? [] };
        case REDUCER_ACTION_TYPE.GET_ADDRESSEE:
            return { ...state, addressee: action.payload ?? "" };
        case REDUCER_ACTION_TYPE.GET_MESSAGE_REASON:
            return { ...state, messageReason: action.payload ?? "" };
        case REDUCER_ACTION_TYPE.GET_MESSAGE_TEXT:
            return { ...state, messageText: action.payload ?? "" };
    }
}