import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalinhaPageRoutingModule } from './galinha-routing.module';

import { GalinhaPage } from './galinha.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalinhaPageRoutingModule
  ],
  declarations: [GalinhaPage],
  providers:[TextToSpeech]
})
export class GalinhaPageModule {}
