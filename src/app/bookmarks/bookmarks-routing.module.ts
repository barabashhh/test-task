import { NgModule } from '@angular/core';
import { BookmarksComponent } from './containers/bookmarks/bookmarks.component';
import { RouterModule, Routes } from "@angular/router";
import { AddBookmarkComponent } from "./containers/add-bookmark/add-bookmark.component";

const routes: Routes = [
  {
    path: '',
    component: BookmarksComponent
  },
  {
    path: 'add',
    component: AddBookmarkComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookmarksRoutingModule { }
