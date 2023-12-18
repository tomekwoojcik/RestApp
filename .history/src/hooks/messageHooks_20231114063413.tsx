export const initState = {
    subordinatesArr: [],
    addressee: "",
    messageReason: "",
    messageText: "",
    messageObjArr: [],
    messageCounter: 1,
    messageObj: {},
    clickMessage: 1,
    getMessageArr: [],
}

export enum REDUCER_ACTION_TYPE {
    GET_SUBORDINATES,
    GET_ADDRESSEE,
    GET_MESSAGE_REASON,
    GET_MESSAGE_TEXT,
    GET_MESSAGE_OBJ_DATA,
    SET_COUNTER,
    HANDLE_MESSAGE_OBJ,
    SET_CLICK_MESSAGE_COUNTER,
    GET_MESSAGE_ARR
    
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
        case REDUCER_ACTION_TYPE.SET_COUNTER:
            return { ...state, messageCounter: action.payload ?? 1 };
        case REDUCER_ACTION_TYPE.GET_MESSAGE_OBJ_DATA:
            return { ...state, messageObjArr: action.payload ?? [] };
        case REDUCER_ACTION_TYPE.HANDLE_MESSAGE_OBJ:
            return { ...state, messageObj: action.payload ?? {} };
        case REDUCER_ACTION_TYPE.SET_CLICK_MESSAGE_COUNTER:
            return { ...state, clickMessage: action.payload ?? 1 };
        case REDUCER_ACTION_TYPE.GET_MESSAGE_ARR:
            return { ...state, getMessageArr: action.payload ?? [] };
    }
}