import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmareloPageRoutingModule } from './amarelo-routing.module';

import { AmareloPage } from './amarelo.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmareloPageRoutingModule
  ],
  declarations: [AmareloPage],
  providers:[TextToSpeech]
})
export class AmareloPageModule {}
