export const initState = {};

export enum REDUCER_ACTION_TYPE {}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
};

export const reducer = (
    state: typeof initState,
    action: ReducerAction): typeof initState => { };
