import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './containers/bookmarks/bookmarks.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { BOOKMARKS_FEATURE_KEY, BOOKMARS_MODULE_REDUCERS } from "./store";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { BookmarksPageEffects } from "./store/bookmarks-page/bookmarks-page.effects";
import { MatCardModule } from "@angular/material/card";
import { BookmarksRoutingModule } from "./bookmarks-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { AddBookmarkComponent } from './containers/add-bookmark/add-bookmark.component';
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    BookmarksComponent,
    BookmarkComponent,
    AddBookmarkComponent,
  ],
  imports: [
    CommonModule,
    BookmarksRoutingModule,
    EffectsModule.forFeature([BookmarksPageEffects]),
    StoreModule.forFeature(BOOKMARKS_FEATURE_KEY, BOOKMARS_MODULE_REDUCERS),
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class BookmarksModule { }
