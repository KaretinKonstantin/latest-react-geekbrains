import {createStore} from "redux";
import {profileReducer} from "./profile/reducer";

export const store = createStore(
    profileReducer,
);

export type RootState = ReturnType<typeof profileReducer>

