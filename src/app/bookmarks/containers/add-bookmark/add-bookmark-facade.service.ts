import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { IBookmark } from '../../interfaces/bookmark';
import { SAVE_BOOKMARKS_REQUEST } from "../../store/bookmarks-page/bookmarks-page.actions";

@Injectable({
  providedIn: 'root'
})
export class AddBookmarkFacadeService {
  constructor(private _store: Store) {
  }

  saveBookmark(bookmark: IBookmark) {
    this._store.dispatch(SAVE_BOOKMARKS_REQUEST({payload: bookmark}))
  }
}
