import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaranjaPageRoutingModule } from './laranja-routing.module';

import { LaranjaPage } from './laranja.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaranjaPageRoutingModule
  ],
  declarations: [LaranjaPage],
  providers:[TextToSpeech]
})
export class LaranjaPageModule {}
