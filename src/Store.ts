import { Action } from "./Action";
import { State } from "./State";
import { Reducer } from "./Reducer";

export interface Store<S = any, A = Action> {
  getState(): State;
  dispatch(action: Action): any;
  subscribe(cb: () => void): () => void;
}

function configureStore(reducer: Reducer<State, Action>, state: State): Store {
  const subscribers = new Set();
  return {
    getState() {
      return state;
    },
    dispatch(action: Action): any {
      state = reducer(state, action);
      subscribers.forEach((cb: () => void) => cb());
    },
    subscribe(cb: () => void): () => void {
      subscribers.add(cb);
      return () => {
        subscribers.delete(cb);
      };
    },
  };
}
