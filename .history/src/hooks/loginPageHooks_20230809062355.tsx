export const initState = {} // obiekt przetrzymujący stan wartości
const enum REDUCER_ACTION_TYPE = {

}// enum przetrzymujący nazwy operacji które będziemy wykonywać na reducer
type ReducerAction = {
    type:REDUCER_ACTION_TYPE
} // opisujemy typ akcji wrzucając dp typu enum
export const reducer = (state: typeof initState, action: ReducerAction ) => {
    
}