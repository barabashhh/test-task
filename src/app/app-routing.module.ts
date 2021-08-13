import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bookmarks',
    loadChildren: () => import('./bookmarks/bookmarks.module').then((e) => e.BookmarksModule)
  },
  {
    path: '**',
    redirectTo: 'bookmarks'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
