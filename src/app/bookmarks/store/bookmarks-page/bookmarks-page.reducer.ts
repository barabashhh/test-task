import { IBookmarksState, INITIAL_BOOKMARKS_STATE } from "./bookmarks-page.state";
import {
  DELETE_BOOKMARK_REQUEST, DELETE_BOOKMARK_REQUEST_FAIL, DELETE_BOOKMARK_REQUEST_SUCCESS,
  FETCH_BOOKMARKS_REQUEST,
  FETCH_BOOKMARKS_REQUEST_FAIL, FETCH_BOOKMARKS_REQUEST_SUCCESS,
  SAVE_BOOKMARKS_REQUEST,
  SAVE_BOOKMARKS_REQUEST_FAIL, SAVE_BOOKMARKS_REQUEST_SUCCESS
} from "./bookmarks-page.actions";
import { Action, createReducer, on } from "@ngrx/store";
import { StateStatus } from "src/app/shared/interfaces/state-status";


const reducer = createReducer(
  INITIAL_BOOKMARKS_STATE,
  on(FETCH_BOOKMARKS_REQUEST, SAVE_BOOKMARKS_REQUEST, DELETE_BOOKMARK_REQUEST, (state) => ({
    ...state,
    status: StateStatus.Loading
  })),
  on(FETCH_BOOKMARKS_REQUEST_FAIL, SAVE_BOOKMARKS_REQUEST_FAIL, DELETE_BOOKMARK_REQUEST_FAIL, (state) => ({
    ...state,
    status: StateStatus.Failed
  })),
  on(FETCH_BOOKMARKS_REQUEST_SUCCESS, SAVE_BOOKMARKS_REQUEST_SUCCESS, DELETE_BOOKMARK_REQUEST_SUCCESS, (state, {payload}) => ({
    ...state,
    data: payload,
    status: StateStatus.Loaded
  }))
)

export function bookmarksPageReducer(state: IBookmarksState | undefined, action: Action) {
  return reducer(state, action);
}
