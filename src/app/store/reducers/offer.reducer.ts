// import { createReducer, on } from "@ngrx/store";
// import { Offer } from "src/app/core/models/offer.model";
// import { UserSessionInfos } from "src/app/core/models/user.model";
// import { clearSessionInfos, setSessionInfos } from "../actions/user.action";

// export interface State{
//   user: UserSessionInfos,
//   Offers: Offer[]
// }

// export const initialState: State = {
//   user: {},
//   Offers: []
// }

// export const userReducer = createReducer(
//   initialState,
//   on(setSessionInfos, (state, { user })=>({
//     ...state,
//     user: user
//   })),
//   on(clearSessionInfos, (state) => ({
//     ...state,
//     user: {}
//   }))
// );


import { createReducer, on } from "@ngrx/store";
import { Offer } from "src/app/core/models/offer.model";
import { addOffer, deleteOffer } from "../actions/offer.action";

export let initialState: Offer[] = [

];

for(let i=0; i<=19; i++){
  initialState.push(
    {
      id: i,
      title: "Title "+(i+1),
      position: "Position "+(i+1),
      field: "Field "+(i+1),
      work_style: "Work style "+(i+1),
      contract: "contract "+(i+1),
      missions: ["Mission 1", "Mission 2"],
      profile: ['Profile 1', 'Profile 2'],
      deadline!: new Date(),
      complementary_infos!: "Complementary informations "+i,
      date: new Date,
      creatorId: i%2
    }
  );
}

export const offerReducer = createReducer(
  initialState,
  on(addOffer, (state, { offer }) => [...state, offer]),
  on(deleteOffer, (state, { id }) => state.filter(x => x.id!==id))
);
