import { makeActionNameFactory } from "../../../shared/utils/make-action-name-factory";
import { createAction, props } from "@ngrx/store";
import { IBookmark } from "../../interfaces/bookmark";

const actionName = makeActionNameFactory('BOOKMARKS_PAGE');

export const FETCH_BOOKMARKS_REQUEST = createAction(actionName('FETCH_BOOKMARKS_REQUEST'));
export const FETCH_BOOKMARKS_REQUEST_SUCCESS = createAction(actionName('FETCH_BOOKMARKS_REQUEST_SUCCESS'), props<{ payload: IBookmark[] }>());
export const FETCH_BOOKMARKS_REQUEST_FAIL = createAction(actionName('FETCH_BOOKMARKS_REQUEST_FAIL'));
export const SAVE_BOOKMARKS_REQUEST = createAction(actionName('SAVE_BOOKMARKS_REQUEST'), props<{ payload: IBookmark }>());
export const SAVE_BOOKMARKS_REQUEST_SUCCESS = createAction(actionName('SAVE_BOOKMARKS_REQUEST_SUCCESS'), props<{ payload: IBookmark[] }>());
export const SAVE_BOOKMARKS_REQUEST_FAIL = createAction(actionName('SAVE_BOOKMARKS_REQUEST_FAIL'));
export const DELETE_BOOKMARK_REQUEST = createAction(actionName('DELETE_BOOKMARKS_REQUEST'), props<{ payload: string }>());
export const DELETE_BOOKMARK_REQUEST_SUCCESS = createAction(actionName('DELETE_BOOKMARKS_REQUEST_SUCCESS'), props<{ payload: IBookmark[] }>());
export const DELETE_BOOKMARK_REQUEST_FAIL = createAction(actionName('DELETE_BOOKMARKS_REQUEST_FAIL'));
export const NAVIGATE_TO_BOOKMARKS = createAction(actionName('NAVIGATE_TO_BOOKMARKS'));
