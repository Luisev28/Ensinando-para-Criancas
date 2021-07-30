import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimaoPageRoutingModule } from './limao-routing.module';

import { LimaoPage } from './limao.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimaoPageRoutingModule
  ],
  declarations: [LimaoPage],
  providers:[TextToSpeech]
})
export class LimaoPageModule {}
