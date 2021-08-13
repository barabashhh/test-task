import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreModule} from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from "@angular/common/http";
import { META_REDUCERS, REDUCER_TOKEN, ROOT_REDUCERS } from "./store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(REDUCER_TOKEN,{
      metaReducers: META_REDUCERS,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictStateImmutability: true,
        strictActionSerializability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([]),
    HttpClientModule
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useValue: ROOT_REDUCERS
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
