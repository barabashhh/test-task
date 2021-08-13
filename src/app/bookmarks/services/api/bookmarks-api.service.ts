import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBookmark } from "../../interfaces/bookmark";
import { BookmarksDataService } from "../bookmarks-data.service";

@Injectable({
  providedIn: 'root'
})
export class BookmarksApiService {

  constructor(private _dataService: BookmarksDataService) {
  }

  fetchBookmarks(): Observable<IBookmark[]> {
    let data = this._dataService.fetchBookmarks();
    return of(data);
  }

  saveBookmark(bookmark: IBookmark): Observable<IBookmark[]> {
    let data = this._dataService.saveBookmarks(bookmark);
    return of(data);
  }

  deleteBookmarkById(id: string): Observable<IBookmark[]> {
    let data = this._dataService.deleteBookmarkById(id);
    return of(data);
  }
}
