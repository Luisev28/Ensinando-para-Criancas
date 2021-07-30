import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeisPageRoutingModule } from './seis-routing.module';

import { SeisPage } from './seis.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeisPageRoutingModule
  ],
  declarations: [SeisPage],
  providers:[TextToSpeech]
})
export class SeisPageModule {}
