import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaoPageRoutingModule } from './leao-routing.module';

import { LeaoPage } from './leao.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaoPageRoutingModule
  ],
  declarations: [LeaoPage],
  providers:[TextToSpeech]
})
export class LeaoPageModule {}
