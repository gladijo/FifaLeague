import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { FifaLeagueService } from './fifa-league.service';
import { PlayerformComponent } from './playerform/playerform.component';
import { MatDialogModule } from '@angular/material';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule}  from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PlayerlistComponent,
    PlayerformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [FifaLeagueService],
  bootstrap: [AppComponent],
  entryComponents: [PlayerformComponent]
})
export class AppModule { }
