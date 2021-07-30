import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CincoPageRoutingModule } from './cinco-routing.module';

import { CincoPage } from './cinco.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CincoPageRoutingModule
  ],
  declarations: [CincoPage],
  providers:[TextToSpeech]
})
export class CincoPageModule {}
