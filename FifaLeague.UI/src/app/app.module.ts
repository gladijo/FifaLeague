import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { FifaLeagueService } from './fifa-league.service';
import { PlayerformComponent } from './playerform/playerform.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PlayerlistComponent,
    PlayerformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [FifaLeagueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
