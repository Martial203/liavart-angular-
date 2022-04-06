// import { createReducer, on } from '@ngrx/store';
// import { decrement, increment, reset } from '../actions/offer.action';

// export const initialState = 0;

// export const counterReducer = createReducer(
//   initialState,
//   on(increment, (state, { number }) => state + number),
//   on(decrement, (state) => state - 1),
//   on(reset, (state) => 0)
// );

import { createReducer, on } from "@ngrx/store";
import { UserSessionInfos } from "src/app/core/models/user.model";
import { clearSession, setSessionInfos } from "../actions/user.action";

const defaultState: UserSessionInfos = {id: -1};

export const initialState: UserSessionInfos = {id: -1};

export const userReducer = createReducer(
  initialState,
  on(setSessionInfos, (state, { user }) => user),
  on(clearSession, (state) => defaultState)
);
