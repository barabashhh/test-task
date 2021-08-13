import { Injectable } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { IBookmark } from '../../interfaces/bookmark';
import { FETCH_BOOKMARKS_REQUEST, DELETE_BOOKMARK_REQUEST } from "../../store/bookmarks-page/bookmarks-page.actions";
import { GET_BOOKMARKS } from "../../store/bookmarks-page/bookmarks-page.selectors";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookmarksFacadeService {
  bookmarks$: Observable<Map<string, IBookmark[]>>;

  constructor(private _store: Store) {
    this.bookmarks$ = this._store.pipe(select(GET_BOOKMARKS)).pipe(
      map((items: IBookmark[]) => {
          return items.reduce(
            (entryMap: Map<string, IBookmark[]>, e: IBookmark) => entryMap.set(e.group, [...entryMap.get(e.group) || [], e]),
            new Map()
          );
        }
      ))
  }

  fetchBookmarks() {
    this._store.dispatch(FETCH_BOOKMARKS_REQUEST())
  }

  deleteItem(id: string) {
    this._store.dispatch(DELETE_BOOKMARK_REQUEST({payload: id}))
  }
}
