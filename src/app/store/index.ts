import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { InjectionToken } from "@angular/core";
import { BOOKMARS_MODULE_REDUCERS, IBookmarksModuleState } from "../bookmarks/store";

export interface IState {
  bookmarks: IBookmarksModuleState
}

export const ROOT_REDUCERS: ActionReducerMap<IState> = {
  bookmarks: BOOKMARS_MODULE_REDUCERS
}

export const META_REDUCERS: MetaReducer<IState>[] = [];
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<IState>>('AppReducers')
