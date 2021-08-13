import { combineReducers, createFeatureSelector } from "@ngrx/store";
import { IBookmarksState } from "./bookmarks-page/bookmarks-page.state";
import { bookmarksPageReducer } from "./bookmarks-page/bookmarks-page.reducer";

export interface IBookmarksModuleState {
  bookmarksPage: IBookmarksState,
}

export const BOOKMARKS_FEATURE_KEY = 'bookmarks';
export const GET_BOOKMARKS_STATE = createFeatureSelector<any, IBookmarksModuleState>(BOOKMARKS_FEATURE_KEY);

export const BOOKMARS_MODULE_REDUCERS = combineReducers({
  bookmarksPage: bookmarksPageReducer
})
