import { StateStatus } from "../../../shared/interfaces/state-status";
import { IBookmark } from "../../interfaces/bookmark";

export interface IBookmarksState {
  data: IBookmark[],
  status: StateStatus
}

export const DEFAULT_STATE: IBookmarksState = {
  data: [],
  status: StateStatus.Empty
}

export const INITIAL_BOOKMARKS_STATE = DEFAULT_STATE;
