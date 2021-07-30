import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatoPageRoutingModule } from './pato-routing.module';

import { PatoPage } from './pato.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatoPageRoutingModule
  ],
  declarations: [PatoPage],
  providers:[TextToSpeech]
})
export class PatoPageModule {}
