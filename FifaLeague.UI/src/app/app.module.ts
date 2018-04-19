import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { FifaLeagueService } from './fifa-league.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FifaLeagueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
