import { Injectable } from '@angular/core';
import { IBookmark } from "../interfaces/bookmark";
import { BOOKMARKS } from "../constants/bookmarks.const";

@Injectable({
  providedIn: 'root'
})
export class BookmarksDataService {
  // This service done only to mock BE

  public key = 'bookmarks';
  public initialData: IBookmark[] = BOOKMARKS;

  constructor() {
  }

  fetchBookmarks(): IBookmark[]  {
    if (!localStorage[this.key]) {
      this.setItem(this.initialData);
    }

    return this.getItem();
  }

  saveBookmarks(item: IBookmark): IBookmark[] {
    const bookmark = {...item, id: `${Math.random()}${(new Date).getTime()}`}
    const data = this.getItem();
    const datasource = [...data, bookmark];
    this.setItem(datasource);

    return datasource;
  }

  deleteBookmarkById(id: string) {
    const data = this.getItem();
    const filtered = data.filter((item: IBookmark) => item.id !== id);
    this.setItem(filtered);

    return filtered;
  }

  private getItem(): IBookmark[] {
    return JSON.parse(<string>localStorage.getItem(this.key))
  }

  private setItem(arr: IBookmark[]) {
    return localStorage.setItem(this.key, JSON.stringify(arr));
  }
}
