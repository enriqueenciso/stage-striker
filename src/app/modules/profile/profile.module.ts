import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { CrewProfileComponent } from './crew-profile/crew-profile.component';
import { GameProfileComponent } from './game-profile/game-profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlayerProfileComponent,
    CrewProfileComponent,
    GameProfileComponent]
})
export class ProfileModule { }
