// import { createAction, props } from "@ngrx/store";
// import { User, UserSessionInfos } from "src/app/core/models/user.model";

// export const setSessionInfos = createAction('[LandingPageComponent Componennt] SetSessionInfos', props<{user: UserSessionInfos}>());

// export const clearSessionInfos = createAction('[MainPage Component] ClearSessionInfos');



import { createAction, props } from "@ngrx/store";
import { UserSessionInfos } from "src/app/core/models/user.model";

export const setSessionInfos = createAction('[LandingPageComponent Componennt] SetSessionInfos', props<{user: UserSessionInfos}>());

export const clearSession = createAction('[MainPageComponent] ClearSession');
