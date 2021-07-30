import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoxoPageRoutingModule } from './roxo-routing.module';

import { RoxoPage } from './roxo.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoxoPageRoutingModule
  ],
  declarations: [RoxoPage],
  providers:[TextToSpeech]
})
export class RoxoPageModule {}
