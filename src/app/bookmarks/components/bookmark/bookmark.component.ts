import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IBookmark } from "../../interfaces/bookmark";

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent {
  @Input() bookmark: IBookmark | undefined;
  @Output() onDelete = new EventEmitter<string>();

  deleteItem(id: string) {
    this.onDelete.emit(id);
  }
}
