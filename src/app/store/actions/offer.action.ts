// import { createAction, props } from '@ngrx/store';

// export const increment = createAction('[Counter Component] Increment', props<{number: number}>());
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter Component] Reset');

import { createAction, props } from "@ngrx/store";
import { Offer } from "src/app/core/models/offer.model";


export const addOffer = createAction('[MainPageComponent Component] AddOffer', props<{offer: Offer}>());

export const deleteOffer = createAction('[MainPageComponent Component] DeleteOffer', props<{id: number}>());
