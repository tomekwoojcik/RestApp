
export const initState = {
    leaveRequestDataArr: [],
}

export enum REDUCER_ACTION_TYPE {
    GET_LEAVE_DATA,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: any
};

export const reducer = (state:typeof initState, action:ReducerAction)=>{}