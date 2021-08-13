import { Component, OnInit } from '@angular/core';
import { BookmarksFacadeService } from "./bookmarks-facade.service";
import { Observable } from "rxjs";
import { IBookmark } from "../../interfaces/bookmark";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  constructor(public facade: BookmarksFacadeService) { }

  ngOnInit(): void {
    this.facade.fetchBookmarks();
  }

  onDeleteItem(id: string) {
    this.facade.deleteItem(id);
  }

  get bookmarks$(): Observable<Map<string, IBookmark[]>> {
    return this.facade.bookmarks$;
  }
}
