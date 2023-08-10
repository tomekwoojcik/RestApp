export const initState = { loginValue: "" } // obiekt przetrzymujący stan wartości
enum REDUCER_ACTION_TYPE{
    HANDLE_LOGIN,
}// enum przetrzymujący nazwy operacji które będziemy wykonywać na reducer

type ReducerAction = {
    type:REDUCER_ACTION_TYPE
} // opisujemy typ akcji wrzucając dp typu enum

export const reducer = (state: typeof initState, action: ReducerAction ) : typeof initState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.HANDLE_LOGIN:
            return
        default: throw new Error();
    }
}