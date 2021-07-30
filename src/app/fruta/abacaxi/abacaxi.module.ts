import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbacaxiPageRoutingModule } from './abacaxi-routing.module';

import { AbacaxiPage } from './abacaxi.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbacaxiPageRoutingModule
  ],
  declarations: [AbacaxiPage],
  providers:[TextToSpeech]
})
export class AbacaxiPageModule {}
