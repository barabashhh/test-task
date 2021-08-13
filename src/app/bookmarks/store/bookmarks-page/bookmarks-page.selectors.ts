import { GET_BOOKMARKS_STATE, IBookmarksModuleState } from "../index";
import { createSelector } from "@ngrx/store";
import { IBookmarksState } from "./bookmarks-page.state";

export const GET_BOOKMARKS_PAGE_STATE = createSelector(GET_BOOKMARKS_STATE, (state: IBookmarksModuleState) => state.bookmarksPage);

export const GET_BOOKMARKS = createSelector(GET_BOOKMARKS_PAGE_STATE, (state: IBookmarksState) => state.data);

export const GET_BOOKMARKS_STATUS = createSelector(GET_BOOKMARKS_PAGE_STATE, (state: IBookmarksState) => state.status);
