import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  FETCH_BOOKMARKS_REQUEST,
  FETCH_BOOKMARKS_REQUEST_FAIL,
  FETCH_BOOKMARKS_REQUEST_SUCCESS,
  SAVE_BOOKMARKS_REQUEST,
  SAVE_BOOKMARKS_REQUEST_SUCCESS,
  SAVE_BOOKMARKS_REQUEST_FAIL,
  DELETE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_REQUEST_SUCCESS,
  DELETE_BOOKMARK_REQUEST_FAIL,
  NAVIGATE_TO_BOOKMARKS
} from "./bookmarks-page.actions";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { BookmarksApiService } from "../../services/api/bookmarks-api.service";
import { IBookmark } from "../../interfaces/bookmark";
import { Router } from "@angular/router";

@Injectable()
export class BookmarksPageEffects {
  fetchBookmarks$ = createEffect(() =>
    this._actions.pipe(
      ofType(FETCH_BOOKMARKS_REQUEST),
      switchMap(() => {
        return this._apiService.fetchBookmarks().pipe(
          switchMap((data: IBookmark[]) => {
            return [FETCH_BOOKMARKS_REQUEST_SUCCESS({payload: data})]
          }),
          catchError(() => of(FETCH_BOOKMARKS_REQUEST_FAIL()))
        )
      })
    )
  )

  saveBookmarks$ = createEffect(() =>
    this._actions.pipe(
      ofType(SAVE_BOOKMARKS_REQUEST),
      switchMap(({payload}) => {
        return this._apiService.saveBookmark(payload).pipe(
          switchMap((data: IBookmark[]) => {
            return [
              SAVE_BOOKMARKS_REQUEST_SUCCESS({payload: data}),
              NAVIGATE_TO_BOOKMARKS()
            ]
          }),
          catchError(() => of(SAVE_BOOKMARKS_REQUEST_FAIL()))
        )
      })
    )
  )


  navigateToBookmarks$ = createEffect(() =>
    this._actions.pipe(
      map(() => this._router.navigate(['/bookmarks']))
    ), {dispatch: false});


  deleteBookmark$ = createEffect(() =>
    this._actions.pipe(
      ofType(DELETE_BOOKMARK_REQUEST),
      switchMap(({payload}) => {
        return this._apiService.deleteBookmarkById(payload).pipe(
          switchMap((data: IBookmark[]) => {
            return [DELETE_BOOKMARK_REQUEST_SUCCESS({payload: data})]
          }),
          catchError(() => of(DELETE_BOOKMARK_REQUEST_FAIL()))
        )
      })
    )
  )

  constructor(private _actions: Actions, private _apiService: BookmarksApiService, private _router: Router) {
  }
}
