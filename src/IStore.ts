import {Action} from "./Action";
import {State} from "./State";
import {Reducer} from "./Reducer";

export interface IStore<S = any, A = Action> {
    getState(): State;
    dispatch(action: Action): any;
    subscribe(cb: () => void): () => void;
}
//
// export type Middleware<State, Action> = (store: Store<State, Action>) => (next: (action: Action) => any) => (action: Action) => any;
//
// export type ConfigureStore<State, Action> = (
//     reducer: Reducer<State, Action>,
//     initialState?: State | undefined,
//     middlewares?: Middleware<State, Action>[],
// ) => Store<State, Action>;


export class Store implements IStore {
    state: State;
    reducer: Reducer<State, Action>;
    subscribers = new Set();

    constructor(reducer: Reducer<State, Action>, state: State) {
        this.state = state;
        this.reducer = reducer;
    }

    dispatch(action: Action): any {
        this.state = this.reducer(this.state, action);
        this.subscribers.forEach((cb: () => void) => cb());
    }

    getState(): State {
        return this.state;
    }

    subscribe(cb: () => void): () => void {
        this.subscribers.add(cb);
        return () => {
            this.subscribers.delete(cb);
        }
    }
}

function configureStore(reducer: Reducer<State, Action>, state: State): IStore {
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
            }
        }
    }
}